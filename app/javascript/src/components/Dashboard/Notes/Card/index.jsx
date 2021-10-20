import React from "react";

import PropTypes from "prop-types";

import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ setShowDeleteAlert }) => {
  const imageUrl = "https://i.pravatar.cc/300";
  return (
    <>
      <div className="m-2 p-4 border neeto-ui-border-gray-200 neeto-ui-shadow-s">
        <CardHeader setShowDeleteAlert={setShowDeleteAlert}></CardHeader>
        <CardBody></CardBody>
        <CardFooter imageUrl={imageUrl}></CardFooter>
      </div>
    </>
  );
};

Card.propTypes = {
  setShowDeleteAlert: PropTypes.func
};

export default Card;
