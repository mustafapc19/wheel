import React from "react";

import { Button, Modal, Toastr, Typography } from "@bigbinary/neetoui/v2";

export default function DeleteAlert({
  showDeleteAlert,
  onClose,
  header,
  body
}) {
  return (
    <Modal
      isOpen={showDeleteAlert}
      onClose={onClose}
      closeButton={false}
      size={"md"}
    >
      <Modal.Header>
        <Typography style="h2">{header}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          {body}
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          label="Continue"
          onClick={() => {
            onClose();
            Toastr.success("Contact deleted successfully.");
          }}
          size="large"
        />
        <Button
          style="text"
          label="Cancel"
          onClick={() => onClose()}
          size="large"
        />
      </Modal.Footer>
    </Modal>
  );
}
