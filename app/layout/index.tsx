import type { Route } from "./+types/index";
import { Outlet } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Household" },
    { name: "description", content: "Welcome to Household!" },
  ];
}

export default function Layout() {
  return <Outlet />;
}
