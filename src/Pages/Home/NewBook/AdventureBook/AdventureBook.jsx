import { useEffect, useState } from "react";
import AdventureBookData from "./AdventureBookData";

const AdventureBook = () => {
  const [bookings, setBookings] = useState([]);
  const url = ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /adventureBook`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  return (
    <div>
      <h2>Historical Book:{bookings.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {bookings.map((adventureBookData) => (
          <AdventureBookData
            key={adventureBookData._id}
            adventureBookData={adventureBookData}
          ></AdventureBookData>
        ))}
      </div>
    </div>
  );
};

export default AdventureBook;
