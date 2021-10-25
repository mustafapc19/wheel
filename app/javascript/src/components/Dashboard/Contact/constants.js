import * as yup from "yup";

const ROLE_OPTIONS = [
  {
    label: "Role A",
    value: "roleA"
  },
  {
    label: "Role B",
    value: "roleB"
  }
];

const FORM_INITIAL_VALUES = {
  title: "",
  description: ""
};

const FORM_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required")
});
export { ROLE_OPTIONS, FORM_INITIAL_VALUES, FORM_VALIDATION_SCHEMA };
