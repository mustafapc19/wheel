import React from "react";

import { Pane, Typography } from "@bigbinary/neetoui/v2";

import NewContactForm from "./NewContactForm";

export default function NewContactPane({ showPane, setContactPane }) {
  const onClose = () => setContactPane(false);
  return (
    <Pane
      title="Create a New Note"
      isOpen={showPane}
      onClose={onClose}
      size="lg"
    >
      <div className="px-6 py-6">
        <Typography style="h2">Add New Contact</Typography>
      </div>
      <div>
        <NewContactForm onClose={onClose} />
      </div>
    </Pane>
  );
}
