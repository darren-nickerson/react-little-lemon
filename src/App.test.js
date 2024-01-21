import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingForm from "./components/BookingForm/BookingForm";

describe("BookingForm Component", () => {
  describe("Input Boxes", () => {
    it("should render a form with available times and input boxes", async () => {
      render(
        <Router>
          <BookingForm />
        </Router>
      );

      // Find all input boxes in the form
      const inputBoxes = screen.getAllByRole("textbox");

      // Log the number of input boxes
      console.log(`Number of Input Boxes: ${inputBoxes.length}`);

      // Check if at least one input box is found
      expect(inputBoxes.length).toBeGreaterThan(0);

      // Iterate through input boxes and assert that each is present
      inputBoxes.forEach((inputBox) => {
        expect(inputBox).toBeInTheDocument();
      });
    });
  });

  describe("Select Boxes", () => {
    it("should render a form with available times and select boxes", async () => {
      render(
        <Router>
          <BookingForm />
        </Router>
      );

      // Find all select boxes in the form
      const selectBoxes = screen.getAllByRole("combobox");

      // Log the number of select boxes
      console.log(`Number of Select Boxes: ${selectBoxes.length}`);

      // Check if at least one select box is found
      expect(selectBoxes.length).toBeGreaterThan(0);

      // Iterate through select boxes and assert that each is present
      selectBoxes.forEach((selectBox) => {
        expect(selectBox).toBeInTheDocument();
      });
    });
  });
});

describe("BookingForm Component Guests", () => {
  describe("Guest Number Field", () => {
    it("should render a form with available times and a guest number field", async () => {
      render(
        <Router>
          <BookingForm />
        </Router>
      );

      // Find the guest number input
      const guestNumberInput = screen.getByText(/guest/i);

      // Log the presence of guest number input
      console.log(`Guest Number Input Present: ${guestNumberInput}`);

      // Check if the guest number input is found
      expect(guestNumberInput).toBeInTheDocument();
    });
  });
});

describe("BookingForm Component Dates", () => {
  describe("Date Input Fields", () => {
    it("should render a form with available times and date input fields", async () => {
      render(
        <Router>
          <BookingForm />
        </Router>
      );

      // Find all date inputs in the form
      const dateInputs = screen.getAllByText(/date/i);

      // Log the presence of each date input
      dateInputs.forEach((dateInput, index) => {
        console.log(`Date Input ${index + 1} Present: ${dateInput}`);
        // Check if each date input is found
        expect(dateInput).toBeInTheDocument();
      });
    });
  });
});
