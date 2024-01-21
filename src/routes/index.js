import { Routes, Route } from "react-router-dom";
import { Homepage, Booking } from "../pages";
import ScrollToAnchor from "../components/ScrollToAnchor/ScrollToAnchor";
import BookingReceipt from "../components/BookingReceipt/BookingReceipt";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const RouteMap = () => {
  return (
    <>
      <ScrollToAnchor />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-receipt" element={<BookingReceipt />} />
        <Route path='*' element={<ErrorPage/>} />

      </Routes>
    </>
  );
};

export default RouteMap;
