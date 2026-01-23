import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";
import { redirect } from "react-router";

export default [
    layout("layout/index.tsx", [
        index("layout/summary.tsx"),

        ...prefix("budget", [
            index("subapps/budget/summary/index.jsx"),
            route("create", "subapps/budget/create/index.jsx"),
        ])
    ])
] satisfies RouteConfig;
