import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown, Typography } from "@bigbinary/neetoui/v2";

const CardHeader = ({ setShowDeleteAlert }) => {
  return (
    <>
      <div className="flex justify-between">
        <Typography style="h5">How to claim the warranty?</Typography>
        <Dropdown
          icon={() => <MenuVertical size={20} color="gray" />}
          position="bottom-start"
          buttonStyle="text"
        >
          <li>Edit</li>
          <li
            onClick={() => {
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </li>
        </Dropdown>
      </div>
    </>
  );
};

export default CardHeader;
