import React, { useEffect, useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { Container, Header, MenuBar } from "@bigbinary/neetoui/v2/layouts";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Input, PageLoader } from "neetoui";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

// import { SubHeader } from "neetoui/layouts";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
import NoteTable from "./NoteTable";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <div className="flex w-full">
        <MenuBar showMenu>
          <MenuBar.Block label="All" count={13} active />
          <MenuBar.Block label="Users" count={2} />
          <MenuBar.Block label="Leads" count={7} />
          <MenuBar.Block label="Visitors" count={4} />
        </MenuBar>
        <Container>
          <Header
            title="All Notes"
            menuBarToggle={() => {}}
            actionBlock={
              <div className="flex justify-between ">
                <div className="w-96">
                  <Input
                    className="pr-2 w-96"
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search Name, Email, Phone Number"
                    size="large"
                    value={searchTerm}
                    prefix={<Search size={16} />}
                  />
                  {/* <SubHeader
                searchProps={{
                  value: searchTerm,
                  placeHolder: "Search Name, Email, Phone Number",
                  onChange: e => setSearchTerm(e.target.value),
                  clear: () => setSearchTerm("")
                }}
                // deleteButtonProps={{
                //   onClick: () => setShowDeleteAlert(true),
                //   disabled: !selectedNoteIds.length
                // }}
              /> */}
                </div>
                <div>
                  <Button
                    onClick={function noRefCheck() {}}
                    label="Add New Note +"
                    style="primary"
                    size="large"
                    fullWidth
                  />
                </div>
              </div>
            }
          />
          {notes.length ? (
            <>
              <NoteTable
                selectedNoteIds={selectedNoteIds}
                setSelectedNoteIds={setSelectedNoteIds}
                notes={notes}
              />
            </>
          ) : (
            <EmptyState
              image={EmptyNotesListImage}
              title="Looks like you don't have any notes!"
              subtitle="Add your notes to send customized emails to them."
              primaryAction={() => setShowNewNotePane(true)}
              primaryActionLabel="Add New Note"
            />
          )}
          <NewNotePane
            showPane={showNewNotePane}
            setShowPane={setShowNewNotePane}
            fetchNotes={fetchNotes}
          />
          {showDeleteAlert && (
            <DeleteAlert
              selectedNoteIds={selectedNoteIds}
              onClose={() => setShowDeleteAlert(false)}
              refetch={fetchNotes}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Notes;
