import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import { Helmet } from "react-helmet";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Booking Page</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
