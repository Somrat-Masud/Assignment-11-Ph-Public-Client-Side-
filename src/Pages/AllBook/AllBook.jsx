import { useEffect, useState } from "react";
import AllBookings from "./AllBookings";

const AllBook = () => {
  const [bookings, setBookings] = useState([]);
  const url = ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /allbook`;
  const [searchText, setSerchText] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleSearch = () => {
    fetch(
      ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /search/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  };

  //
  return (
    <div>
      <h2>AllBook:{bookings.length}</h2>
      <input
        className="h-[40px] w-[450px] border border-red-500 bg-slate-100 mx-auto ml-96"
        onChange={(e) => setSerchText(e.target.value)}
        type="serch"
      ></input>
      <button onClick={handleSearch} className="btn btn-sm">
        Search
      </button>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {bookings.map((booking) => (
          <AllBookings key={booking._id} booking={booking}></AllBookings>
        ))}
      </div>
    </div>
  );
};

export default AllBook;
