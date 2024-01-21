import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "./schema/index";
import CustomSelect from "./CustomSelect";
import useApi from "../../hooks/useApi";
import styles from "./BookingForm.module.css";
import CustomTextarea from "./CustomTextArea";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const { state: availableTimesState, dispatch } = useApi();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 2000));

    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(values));
    actions.resetForm();

    setTimeout(() => {
      navigate("/booking-receipt");
    }, 0);
  };

  const handleDateChange = (value, setFieldValue) => {
    setFieldValue("date", value);
    dispatch(value);

    // Reset the time field to an empty string when a new date is selected
    setFieldValue("time", "");
  };

  return (
    <Formik
      initialValues={{
        guests: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        occasion: "",
        description: "",
      }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values, setFieldTouched }) => (
        <Form className={styles.booking_form} aria-labelledby="booking-form-title">
          <CustomInput
            label="Guests"
            name="guests"
            type="number"
            placeholder="Enter Number of Guests"
            min={1}
            max={10}
            required="*"
          />
          <CustomInput
            label="Date"
            name="date"
            type="date"
            placeholder="Enter date"
            autoComplete="off"
            onChange={(e) => handleDateChange(e.target.value, setFieldValue)}
            required="*"
          />
          <CustomSelect
            label="Time"
            name="time"
            placeholder="Please Select a time"
            options={availableTimesState.availableTimes}
            disabled={
              !values.date ||
              new Date(values.date) < new Date().setHours(0, 0, 0, 0)
            }
            required="*"
          />
          <CustomInput
            label="Name"
            name="name"
            type="ext"
            placeholder="Enter your full name"
            required="*"
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <CustomInput
            label="Phone"
            name="phone"
            type="telephone"
            placeholder="Enter your phone number"
            required="*"
          />

          <CustomSelect
            label="Occasion"
            name="occasion"
            placeholder="Please select occasion"
            options={["Birthday", "Anniversary", "Date", "Other"]}
            required="*"
          />

          <CustomTextarea
            label="Description"
            name="description"
            type="textarea"
            placeholder="Enter your description"
          />
          <button
            className={styles.button}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Book table"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
