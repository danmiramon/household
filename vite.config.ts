import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [
      "@toolpad/core",
      "@mui/x-data-grid",
      // "@mui/material",
      // "@mui/icons-material",
      // "@mui/system",
      // "@mui/utils",
      // "@mui/styled-engine",
      // "@emotion/react",
      // "@emotion/styled",
    ],
  },
});
