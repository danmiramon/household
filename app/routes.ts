import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";

export default [
  layout("layout/index.tsx", [
    index("layout/home.tsx"),

    ...prefix("budget", [
      index("subapps/budget/summary/index.tsx"),
      route("create", "subapps/budget/create/index.tsx"),
    ])
  ]),

  route("api/locales/:lng/:ns", "routes/locales.ts"),
] satisfies RouteConfig;
