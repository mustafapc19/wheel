import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import PropTypes from "prop-types";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ data }) => {
  const { setShowDeleteAlert, bodyText, imageUrl } = data;
  return (
    <>
      <div className="m-2 p-4 border neeto-ui-border-gray-200 neeto-ui-shadow-s">
        <CardHeader setShowDeleteAlert={setShowDeleteAlert} />
        <CardBody>
          <Typography style="body3">{bodyText}</Typography>
        </CardBody>
        <CardFooter imageUrl={imageUrl} />
      </div>
    </>
  );
};

Card.propTypes = {
  data: {
    setShowDeleteAlert: PropTypes.func,
    bodyText: PropTypes.string,
    imageUrl: PropTypes.string
  }
};

export default Card;
