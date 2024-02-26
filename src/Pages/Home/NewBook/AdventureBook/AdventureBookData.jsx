
const AdventureBookData = ({adventureBookData}) => {
    
    const {AuthorName,catagory,img,price} = adventureBookData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
            <h1 className="text-2xl font-semibold">Name:{}</h1>
            <p className="text-xl font-sens"> AuthorName: {AuthorName}</p>
            <p className="text-2xl font-semibold">Category:{catagory}</p>
            <div className="rating rating-lg">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            </div>
          <h2 className="card-title">Price:{price}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details button</button>
          </div>
        </div>
      </div>
    );
};

export default AdventureBookData;