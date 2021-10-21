import React from "react";

import { Plus, Search, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

const Menubar = () => {
  return (
    <MenuBar
      showMenu
      title={
        <div className="flex justify-between">
          <Typography style="h2">Contacts</Typography>
        </div>
      }
    >
      <MenuBar.Block label="All" count={0} active />
      <MenuBar.Block label="Archived" count={0} />
      <MenuBar.Block label="Completed" count={0} />
      <MenuBar.Block label="Phase 2" count={0} />

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />
          },
          {
            icon: () => <Plus size={20} />
          },
          {
            icon: () => <Settings size={20} />
          }
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );
};

export default Menubar;
