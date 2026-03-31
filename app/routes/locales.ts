import { data } from "react-router";
import _ from "utils/lodash";
import { cacheHeader } from "pretty-cache-header";
import { z } from "zod";
import resources from "~/locales";
import type { Route } from "./+types/locales";

export async function loader({ params }: Route.LoaderArgs) {
  const lng = z.enum(_.keys(resources)).safeParse(params.lng);

  if (lng.error) {
    return data({ error: lng.error }, { status: 400 });
  }

  const namespaces = resources[lng.data as keyof typeof resources];

  const ns = z.enum(_.keys(namespaces)).safeParse(params.ns);

  if (ns.error) {
    return data({ error: ns.error }, { status: 400 });
  }

  const headers = new Headers();

  if (process.env.NODE_ENV === "production") {
    headers.set(
      "Cache-Control",
      cacheHeader({
        maxAge: "5m",
        sMaxage: "1d",
        staleWhileRevalidate: "7d",
        staleIfError: "7d",
      }),
    );
  }

  return data(namespaces[ns.data as keyof typeof namespaces], { headers });
}