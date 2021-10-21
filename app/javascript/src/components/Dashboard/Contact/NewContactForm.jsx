import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Pane, Toastr } from "@bigbinary/neetoui/v2";
import { Input, Select } from "@bigbinary/neetoui/v2/formik";
import { Form, Formik } from "formik";
import * as yup from "yup";

import { ROLE_OPTIONS } from "./constants";

export default function NewContactForm({ onClose }) {
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
            <Form className="w-full space-y-4">
              <div className="flex-row justify-between space-x-10">
                <Input
                  label="First Name*"
                  name="firstName"
                  className="mb-2 inline-flex flex-1"
                  placeHolder="Enter first name"
                />
                <Input
                  label="Last Name*"
                  name="lastName"
                  className="mb-2 inline-flex flex-1"
                  placeHolder="Enter last name"
                />
              </div>

              <Input
                label="Email Address*"
                name="lastName"
                className="mb-6"
                placeHolder="Enter your email address"
              />

              <Select
                label="Role*"
                name="tag"
                className="mb-6"
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
