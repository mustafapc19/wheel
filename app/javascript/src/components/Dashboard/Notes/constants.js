import * as yup from "yup";

const ROLE_OPTIONS = [
  {
    label: "Contact A",
    value: "contactA"
  },
  {
    label: "Contact B",
    value: "contactB"
  }
];

const TAG_OPTIONS = [
  {
    label: "Option A",
    value: "optionA"
  },
  {
    label: "Option B",
    value: "optionB"
  }
];

const CARD_DATA = {
  bodyText: `"Are you getting my texts???" she texted to him. He glanced at it
            and chuckled under his breath. Of course he was getting them, but if
            he wasn't getting`,
  imageUrl: "https://i.pravatar.cc/300"
};

const FORM_INITIAL_VALUES = {
  title: "",
  description: ""
};

const FORM_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required")
});

export {
  ROLE_OPTIONS,
  TAG_OPTIONS,
  CARD_DATA,
  FORM_INITIAL_VALUES,
  FORM_VALIDATION_SCHEMA
};
