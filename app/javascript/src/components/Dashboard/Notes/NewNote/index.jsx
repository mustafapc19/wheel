import React from "react";

import { Pane, Typography } from "@bigbinary/neetoui/v2";

import Create from "./Create";

export default function NewNote({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane
      title="Create a New Note"
      isOpen={showPane}
      onClose={onClose}
      size="lg"
    >
      <div className="px-6 py-6">
        <Typography style="h2">Add New Note</Typography>
      </div>
      <div>
        <Create onClose={onClose} refetch={fetchNotes} />
      </div>
    </Pane>
  );
}
