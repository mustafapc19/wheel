import React from "react";

import { Checkbox } from "@bigbinary/neetoui/v2";
import { Scrollable } from "@bigbinary/neetoui/v2/layouts";

import Row from "./Row";

export default function ContactTable({ setShowDeleteAlert }) {
  return (
    <Scrollable className="w-full">
      <table
        className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
      >
        <thead>
          <tr>
            <th>
              <Checkbox name="header" />
            </th>
            <th>Name & Role</th>
            <th>Email</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <Row
                  email="albert@borer.com"
                  imageUrl="https://i.pravatar.cc/300"
                  name="Ronald Richards"
                  setShowDeleteAlert={setShowDeleteAlert}
                />
                <Row
                  email="albert@borer.com"
                  imageUrl="https://i.pravatar.cc/301"
                  name="Jacob Jones"
                  setShowDeleteAlert={setShowDeleteAlert}
                />
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </Scrollable>
  );
}
