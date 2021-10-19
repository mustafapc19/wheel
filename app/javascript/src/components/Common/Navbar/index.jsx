import React from "react";

import { Home, NeetoInsights, UserCircle } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { Toastr } from "neetoui";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

const navLinks = [
  {
    icon: function func() {
      return <Home size={24} />;
    },
    label: "Notes",
    to: "/notes"
  },
  {
    icon: function func() {
      return <UserCircle size={24} />;
    },
    label: "Contact",
    to: "/notes"
  },
  {
    icon: function func() {
      return <NeetoInsights size={24} />;
    },
    label: "Settings",
    to: "/form-elements"
  }
];

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
      navLinks={navLinks}
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
        imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
        name: "oliver smith"
      }}
    ></Sidebar>
  );
};

export default withRouter(NavBar);
