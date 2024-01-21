import { useField } from "formik";
import React from "react";
import styles from "../BookingForm/BookingForm.module.css";

const CustomTextarea = ({ label, required, rows, cols, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={styles.label}>
        {label} <span className={styles.required}>{required}</span>
      </label>

      <textarea
        {...field}
        {...props}
        rows={rows || 4} 
        cols={cols || 50} 
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

export default CustomTextarea;
