import React from "react";

import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { Toastr } from "neetoui";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

import { NAV_LINKS } from "./constants";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <Sidebar
      isCollapsed
      collapsible
      navLinks={NAV_LINKS}
      profileInfo={{
        dropdownProps: [
          {
            label: "Edit",
            onClick: () => {}
          },
          {
            label: "Logout",
            onClick: handleLogout
          }
        ],
        email: "oliver.smith@example.com",
        imageUrl: "https://i.pravatar.cc/300",
        name: "oliver smith"
      }}
    ></Sidebar>
  );
};

export default withRouter(NavBar);
