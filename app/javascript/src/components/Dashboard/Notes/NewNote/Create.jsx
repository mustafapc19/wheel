import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane, Textarea } from "@bigbinary/neetoui/v2";
import { Input, Select } from "@bigbinary/neetoui/v2/formik";
import { Form, Formik } from "formik";

import notesApi from "apis/notes";

import {
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA,
  ROLE_OPTIONS,
  TAG_OPTIONS
} from "../constants";

export default function Create({ onClose, refetch }) {
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
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <>
          <Pane.Body>
            <Form className="w-full space-y-6">
              <Input label="Title*" name="title" placeHolder="Enter title" />
              <Textarea
                label="Description*"
                placeholder="Enter note description"
              />
              <Select
                label="Assigned Contact*"
                name="contact"
                value={null}
                options={ROLE_OPTIONS}
                placeHolder="Select Role"
              />
              <Select
                label="Tags*"
                name="tag"
                options={TAG_OPTIONS}
                placeHolder="Select Tag"
              />
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
