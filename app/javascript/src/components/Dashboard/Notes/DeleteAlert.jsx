import React from "react";

import { Button, Modal, Typography } from "@bigbinary/neetoui/v2";

export default function DeleteAlert({ showDeleteAlert, onClose }) {
  return (
    <Modal
      isOpen={showDeleteAlert}
      onClose={onClose}
      closeButton={false}
      size={"md"}
    >
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={() => onClose()} size="large" />
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
