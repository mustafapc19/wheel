import React from "react";

import { Home, NeetoInsights, UserCircle } from "@bigbinary/neeto-icons";

export const NAV_LINKS = [
  {
    icon: () => {
      return <Home size={24} />;
    },
    label: "Notes",
    to: "/notes"
  },
  {
    icon: () => {
      return <UserCircle size={24} />;
    },
    label: "Contact",
    to: "/notes"
  },
  {
    icon: () => {
      return <NeetoInsights size={24} />;
    },
    label: "Settings",
    to: "/form-elements"
  }
];
