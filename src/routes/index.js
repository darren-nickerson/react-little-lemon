import { Routes, Route } from "react-router-dom";
import { Homepage, Booking } from "../pages";
import ScrollToAnchor from "../components/ScrollToAnchor/ScrollToAnchor";
import BookingReceipt from "../components/BookingReceipt/BookingReceipt";

const RouteMap = () => {
  return (
    <>
      <ScrollToAnchor />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-receipt" element={<BookingReceipt />} />
      </Routes>
    </>
  );
};

export default RouteMap;
