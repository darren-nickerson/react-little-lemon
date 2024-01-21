import { useField } from "formik";
import React from "react";
import styles from "../BookingForm/BookingForm.module.css";

const CustomSelect = ({ label, placeholder, required, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={styles.label}>
        {label} <span className={styles.required}>{required}</span>
      </label>
      <select
        {...field}
        {...props}
        className={`${styles.input} ${
          meta.touched && meta.error ? styles["input-error"] : ""
        }`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option) => <option key={option}>{option}</option>)}
      </select>
      {meta.touched && meta.error ? (
        <div className={styles.errors}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomSelect;
