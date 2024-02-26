const AddBook = () => {
  const handleBookServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;

    const addBook = {
      cutomarName: name,
      image,
      quantity,
      authorName,
      category,
      shortDescription,
      rating,
    };
    console.log(addBook);

    fetch(
      " https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /bookings",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(addBook),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking Successfully");
        }
      });
  };
  return (
    <div>
      <h2>AddBook:{""}</h2>
      <div className="from-section">
        <form onSubmit={handleBookServices}>
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
                <span className="label-text">Quantity of the book</span>
              </label>
              <input
                name="quantity"
                type="text"
                placeholder="Quantity of the book"
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
              <select name="category" id="cars">
                <option value="volvo">History</option>
                <option value="saab">Scince</option>
                <option value="opel">Drama</option>
                <option value="audi">Natok</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <input
                name="shortDescription"
                type="text"
                placeholder="Short description"
                className="input input-bordered"
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
                value="Add Book"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
