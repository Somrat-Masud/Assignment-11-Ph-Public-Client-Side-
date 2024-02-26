import { useEffect, useState } from "react";
import HistoricalBookData from "./HistoricalBookData";

const HistoricalBook = () => {
  const [bookings, setBookings] = useState([]);
  const url = ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /historicalBook`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  return (
    <div>
      <h2>Historical Book:{bookings.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {bookings.map((historicalbooking) => (
          <HistoricalBookData
            key={historicalbooking._id}
            historicalbooking={historicalbooking}
          ></HistoricalBookData>
        ))}
      </div>
    </div>
  );
};

export default HistoricalBook;
