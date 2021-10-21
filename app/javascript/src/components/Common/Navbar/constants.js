import React from "react";

import { Home, NeetoInsights, UserCircle } from "@bigbinary/neeto-icons";

export const NAV_LINKS = [
  {
    icon: () => <Home size={24} />,
    label: "Notes",
    to: "/notes"
  },
  {
    icon: () => <UserCircle size={24} />,
    label: "Contact",
    to: "/contacts"
  },
  {
    icon: () => <NeetoInsights size={24} />,
    label: "Settings",
    to: "/form-elements"
  }
];
