import BookingForm from "../../components/BookingForm/BookingForm";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import styles from "./Booking.module.css";

const Booking = () => {
  return (
    <div id="booking" className={styles.booking}>
      <SectionContainer
        outerColor="var(--primary-color)"
        innerColor="var(--primary-color)"
        paddingTop="var(--size-100)"
        paddingBottom="var(--size-100)"
        tag="section"
      >
        <h1>Little Lemon </h1>
        <h2 className={styles.subtitle}>Table Reservation</h2>

        <BookingForm />
      </SectionContainer>
    </div>
  );
};

export default Booking;
