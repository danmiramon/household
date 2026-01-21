import "dotenv/config";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import {createServer as createViteServer} from "vite";
import cors from "cors";
import http from "http"
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const isDevelopment = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 4000;
const PROTOCOL = process.env.PROTOCOL || isDevelopment ? "http" : "https";
let server;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const app = express();
app.use(cors());

if (isDevelopment) {
  const viteDevServer = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
    root: projectRoot,
  });

  app.use(viteDevServer.middlewares);
  app.use(
    createRequestHandler({
      build: () =>
        viteDevServer.ssrLoadModule(
          "virtual:react-router/server-build",
        ),
    }),
  );
  server = http.createServer(app);
} else {
  app.use(express.static(path.join(projectRoot, "build/client")));
  app.use(
    createRequestHandler({
      build: await import("./build/server/index.js"),
    }),
  );
  server = PROTOCOL === "https" ? https.createServer({}, app) : http.createServer(app);
}

server.listen(PORT, () => {
  console.log(`Server listening on ${PROTOCOL}://localhost:${PORT}`);
});
