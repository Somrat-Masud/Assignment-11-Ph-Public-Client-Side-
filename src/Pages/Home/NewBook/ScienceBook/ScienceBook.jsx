import { useEffect, useState } from "react";
import ScienceBookData from "./ScienceBookData";

const ScienceBook = () => {
  const [bookings, setBookings] = useState([]);
  const url = ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /newbookings`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  return (
    <div>
      <h2 className="text-center text-2xl">science:{bookings.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {bookings.map((booking) => (
          <ScienceBookData
            key={booking._id}
            booking={booking}
          ></ScienceBookData>
        ))}
      </div>
    </div>
  );
};

export default ScienceBook;
