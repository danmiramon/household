import type { Branding, Navigation } from '@toolpad/core';
import { Home, Wallet } from "@mui/icons-material";
import BalanceIcon from '@mui/icons-material/Balance';

const BRANDING: Branding = {
  // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
  title: "Household",
  homeUrl: "/",
};

const NAVIGATION: Navigation = [
  {
    segment: "",
    // title: i18n.t("common.home"),
    title: "Home",
    icon: <Home />,
  },
  {
    segment: "budget",
    title: "Budget",
    icon: <Wallet />,
    children: [
      {
        segment: "",
        title: "Budget",
      },
      {
        segment: "create",
        title: "Create Budget",
      },
    ]
  },
];

export {
  BRANDING,
  NAVIGATION,
};
