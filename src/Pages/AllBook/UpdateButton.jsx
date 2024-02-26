// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const UpdateButton = () => {
  const book = useLoaderData();
  console.log(book);
  const { _id } = book;

  // const [bookings, setBookings] = useState();
  const updateBookings = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const updateBook = {
      cutomarName: name,
      image,
      authorName,
      category,
      rating,
    };
    // console.log(updateBook);
    // console.log(_id);
    fetch(
      `https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /update/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("update Successfully");
          console.log("complete update");
        }
      });
  };
  return (
    <div>
      <h2>AddBook:{name}</h2>
      <div className="from-section">
        <form onSubmit={updateBookings}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input
                name="authorName"
                type="text"
                placeholder="Author Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered"
                selected
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="rating"
                placeholder=" Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="update Submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateButton;
