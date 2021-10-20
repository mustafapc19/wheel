import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane } from "@bigbinary/neetoui/v2";
import { Input, Select } from "@bigbinary/neetoui/v2/formik";
import { Form, Formik } from "formik";
import * as yup from "yup";

import notesApi from "apis/notes";

import { TAG_OPTIONS } from "./constants";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
    >
      {({ isSubmitting }) => (
        <>
          <Pane.Body>
            <Form className="w-full">
              <Input
                label="Title*"
                name="title"
                className="mb-6"
                placeHolder="Enter title"
              />
              <Input
                label="Description*"
                name="description"
                className="mb-6"
                placeHolder="Enter note description"
              />
              <Select
                label="Assigned Contact*"
                name="contact"
                className="mb-6"
                value={null}
                // options={ROLE_OPTIONS}
                placeHolder="Select Role"
              ></Select>
              <Select
                label="Tags*"
                name="tag"
                className="mb-6"
                options={TAG_OPTIONS}
                placeHolder="Select Tag"
              ></Select>
            </Form>
          </Pane.Body>

          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-2"
              icon={Check}
              disabled={isSubmitting}
              loading={isSubmitting}
            />
            <Button onClick={onClose} label="Cancel" style="text" />
          </Pane.Footer>
        </>
      )}
    </Formik>
  );
}
