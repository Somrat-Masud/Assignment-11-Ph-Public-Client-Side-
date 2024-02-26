import { Link } from "react-router-dom";
const NewBook = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-bold font-serif my-9 ">
          {" "}
          Books Cetagory
        </h1>
        <div className="text-3xl font-bold text-center mt-10 space-x-7">
          
          <Link to={'/historicalBook'}>
            <input
              className="btn btn-wide text-2xl mt-3"
              type="button"
              value="Historical Book"
            />
          </Link>
          <Link to={"/scienceBook"}>
            <input
              className="btn btn-wide text-2xl mt-3"
              type="button"
              value="Computer Science "
            />
          </Link>
          <Link to={"/scienceBook"}>
            <input
              className="btn btn-wide text-2xl mt-3"
              type="button"
              value="Philosophy Book"
            />
          </Link>
          <Link to={"/adventureBook"}>
            <input
              className="btn btn-wide text-2xl mt-3"
              type="button"
              value="Adventure Book"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
