import * as yup from "yup";

// schema.js

const phoneRegExp = /^[+]?[0-9\s.-]{8,20}$/;

export const advancedSchema = yup.object().shape({
  guests: yup
    .number()
    .integer("Guests must be an integer")
    .positive("Guests must be a positive number")
    .min(1, "Guests must be at least 1")
    .max(10, "Guests cannot exceed 10")
    .required("Guests field is required"),
  time: yup.string().required("Time field is required"),
  date: yup
    .date()
    .min(new Date().toISOString().split("T")[0], "Date cannot be in the past")
    .required("Date field is required"),
  name: yup.string().required("Name field is required"),
  email: yup.string(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone field is required"),
  occasion: yup.string().required("Occasion field is required"),
  description: yup.string(),
});
