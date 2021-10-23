import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tag, Tooltip, Typography } from "@bigbinary/neetoui/v2";

const CardFooter = ({ imageUrl }) => {
  return (
    <div className="border-t">
      <div className="flex justify-between pt-3">
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
      </div>
    </div>
  );
};

export default CardFooter;
