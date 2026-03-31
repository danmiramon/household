
import type { Route } from "./+types/index";
import { Outlet } from "react-router";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import Dashboard from "./dashboard";
import { createTheme } from "@mui/material/styles";
import { BRANDING, NAVIGATION } from "constants/navigation";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Household" },
    { name: "description", content: "Welcome to Household!" },
  ];
}

export default function Layout() {

  

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ReactRouterAppProvider
      navigation={NAVIGATION}
      branding={BRANDING}
      theme={theme}
    >
      <Dashboard>
        <Outlet />
      </Dashboard>
    </ReactRouterAppProvider>
  );
}
