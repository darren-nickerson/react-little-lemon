import { useField } from "formik";
import React from "react";
import styles from "../BookingForm/BookingForm.module.css";

const CustomInput = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={styles.label}>
        {label}
        <span className={styles.required}>{required}</span>
      </label>

      <input
        {...field}
        {...props}
        className={`${styles.input} ${
          meta.touched && meta.error ? styles["input-error"] : ""
        }`}
      />
      {meta.touched && meta.error ? (
        <div className={styles.errors}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomInput;
