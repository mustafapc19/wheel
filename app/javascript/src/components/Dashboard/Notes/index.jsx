import React, { useEffect, useState } from "react";

import { Plus, Search } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Container, Header } from "@bigbinary/neetoui/v2/layouts";
import { Input, PageLoader } from "neetoui";

import Card from "./Card";
import { CARD_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./MenuBar";
import NewNotePane from "./NewNotePane";

const Notes = () => {
  const [isLoading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Menubar />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => {}}
          actionBlock={
            <div className="flex space-x-4">
              <div className="w-96">
                <Input
                  className="w-90"
                  onChange={e => setSearchTerm(e.target.value)}
                  placeholder="Search Name, Email, Phone Number"
                  size="large"
                  value={searchTerm}
                  prefix={<Search size={16} />}
                />
              </div>
              <div className="flex">
                <Button
                  onClick={() => setShowNewNotePane(true)}
                  label="Add Note"
                  style="primary"
                  size="large"
                  icon={Plus}
                  fullWidth
                />
              </div>
            </div>
          }
        />

        <div className="flex-col w-full">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Card
                key={index.toString()}
                data={{
                  setShowDeleteAlert: setShowDeleteAlert,
                  ...CARD_DATA
                }}
              />
            ))}
        </div>

        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            onClose={() => setShowDeleteAlert(false)}
            showDeleteAlert={showDeleteAlert}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
