import React, { useState, useEffect } from "react";
import styles from "./BookingReceipt.module.css"; // Import your CSS module
import { NavLink } from "react-router-dom";

const BookingReceipt = () => {
  // State to store the data from local storage
  const [localStorageData, setLocalStorageData] = useState(null);

  // Effect to run when the component mounts
  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem("formData");

    // Update the state with the retrieved data
    setLocalStorageData(storedData ? JSON.parse(storedData) : null);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to handle button click and delete session storage data
  const handleBackButtonClick = () => {
    // Remove the data from session storage
    localStorage.removeItem("formData");
  };

  return (
    <div className={styles.bookingReceiptContainer}>
      {localStorageData ? (
        <div className={styles.receiptContent}>
          <div className={styles.receipt_container}>
            <h2 className={styles.heading}>Booking Receipt</h2>

            <p>
              <strong>Guests:</strong> {localStorageData.guests}
            </p>
            <p>
              <strong>Date:</strong> {localStorageData.date}
            </p>
            <p>
              <strong>Time:</strong> {localStorageData.time}
            </p>
            <p>
              <strong>Name:</strong> {localStorageData.name}
            </p>
            <p>
              <strong>Email:</strong> {localStorageData.email}
            </p>
            <p>
              <strong>Phone:</strong> {localStorageData.phone}
            </p>
            <p>
              <strong>Occasion:</strong> {localStorageData.occasion}
            </p>
            <p>
              <strong>Description:</strong> {localStorageData.description}
            </p>

            {/* Confirmation message */}
            <p className={styles.confirmation_message}>
              Thank you! Your table has been successfully booked with the
              provided details.
            </p>

            {/* Back to Homepage button with the onClick handler */}
            <NavLink to="/">
              <button
                className={styles.back_button}
                onClick={handleBackButtonClick}
              >
                Back to Homepage
              </button>
            </NavLink>
          </div>
        </div>
      ) : (
        <p className={styles.noData}>No booking data found.</p>
      )}
    </div>
  );
};

export default BookingReceipt;
