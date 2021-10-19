import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import {
  Avatar,
  Dropdown,
  Tag,
  Tooltip,
  Typography
} from "@bigbinary/neetoui/v2";

const Card = () => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <>
      <div className="m-2 p-4 border neeto-ui-border-gray-200 neeto-ui-shadow-s">
        <div className="flex justify-between">
          <Typography style="h5">How to claim the warranty?</Typography>
          <Dropdown
            icon={() => <MenuVertical size={20} color="gray" />}
            position="bottom-start"
            buttonStyle="text"
          >
            <li>Edit</li>
            <li>Delete</li>
          </Dropdown>
        </div>
        <div className="pb-2">
          <Typography style="body3">
            "Are you getting my texts???" she texted to him. He glanced at it
            and chuckled under his breath. Of course he was getting them, but if
            he wasn't getting{" "}
          </Typography>
        </div>
        <hr></hr>
        <div className="flex justify-between pt-4">
          <Tag label="Getting Started" size="small" color="grey" />

          <div className="flex gap-x-2">
            <Clock className="my-auto" size={10} />
            <Tooltip
              content={<span>Wednesday, 10:30AM</span>}
              placement="bottom-start"
            >
              <Typography style="body3" className="my-auto text-gray">
                Created 2 hours ago
              </Typography>
            </Tooltip>
            <Avatar user={{ name: "User", imageUrl }} size="medium" />
          </div>
          {/* <Clock size={20} color="gray" /> */}
        </div>
      </div>
    </>
  );
};

export default Card;
