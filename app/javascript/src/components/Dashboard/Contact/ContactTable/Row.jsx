import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Checkbox, Dropdown, Typography } from "@bigbinary/neetoui/v2";

export default function Row({ imageUrl, name, email, setShowDeleteAlert }) {
  return (
    <tr>
      <td>
        <Checkbox name="1" />
      </td>
      <td>
        <div className="inline-flex flex-nowrap space-x-2">
          <div className="flex-auto">
            <Avatar
              user={{ name: "User", imageUrl }}
              size="medium"
              className="inline-flex"
            />
          </div>
          <div className="flex-auto">
            <Typography style="h5">{name}</Typography>
            <Typography style="body3">Owner</Typography>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>Feb, 5, 2021</td>
      <td>
        <div className="flex flex-row items-center justify-end space-x-4">
          <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
            <li>Edit</li>
            <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}
