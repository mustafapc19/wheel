import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane, Toastr } from "@bigbinary/neetoui/v2";
import { Input, Select } from "@bigbinary/neetoui/v2/formik";
import { Form, Formik } from "formik";

import {
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA,
  ROLE_OPTIONS
} from "../constants";

export default function Create({ onClose }) {
  const handleSubmit = async () => {
    try {
      // await notesApi.create(values);
      // refetch();
      // onClose();
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
            <Form className="w-full space-y-4">
              <div className="flex-row justify-between space-x-10">
                <Input
                  label="First Name*"
                  name="firstName"
                  className="inline-flex flex-1"
                  placeHolder="Enter first name"
                />
                <Input
                  label="Last Name*"
                  name="lastName"
                  className="inline-flex flex-1"
                  placeHolder="Enter last name"
                />
              </div>

              <Input
                label="Email Address*"
                name="lastName"
                placeHolder="Enter your email address"
              />

              <Select
                label="Role*"
                name="tag"
                options={ROLE_OPTIONS}
                placeHolder="Select Role"
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
              onClick={() => Toastr.success("Contact added successfully.")}
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
