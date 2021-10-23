import React, { useEffect, useState } from "react";

import { Plus, Search } from "@bigbinary/neeto-icons";
import { Button, Pagination } from "@bigbinary/neetoui/v2";
import { Container, Header } from "@bigbinary/neetoui/v2/layouts";
import { Input, PageLoader } from "neetoui";

import DeleteAlert from "components/Common/DeleteAlert";

import ContactTable from "./ContactTable";
import Menubar from "./MenuBar";
import NewContact from "./NewContact";

const Contacts = () => {
  const [isLoading, setLoading] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
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
      <Menubar showMenuBar={showMenuBar} />
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => setShowMenuBar(!showMenuBar)}
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
                  onClick={() => setShowNewContactPane(true)}
                  label="Add Contact"
                  style="primary"
                  size="large"
                  icon={Plus}
                  fullWidth
                />
              </div>
            </div>
          }
        />

        <ContactTable setShowDeleteAlert={setShowDeleteAlert} />

        <NewContact
          showPane={showNewContactPane}
          setContactPane={setShowNewContactPane}
        />
        <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
          <Pagination
            count={300}
            pageNo={1}
            pageSize={25}
            navigate={() => {}}
          />
        </div>
        {showDeleteAlert && (
          <DeleteAlert
            onClose={() => setShowDeleteAlert(false)}
            showDeleteAlert={showDeleteAlert}
            header="Delete Contact"
            body="Are you sure you want to delete contact? These changes cannot be
          undone."
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
