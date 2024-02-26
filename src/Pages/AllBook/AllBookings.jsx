import { Link } from "react-router-dom";

const AllBookings = ({booking}) => {
    const{img, name, authorName, category,_id} = booking;
    

    return (
        <div>
           
           <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img}alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center ">name:{name}</h2>
                <p> authorName:{authorName}</p>
                <p>category: {category}</p>
                    <p>
                    <div className="rating rating-lg">
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    </p>
                <div className="card-actions justify-center">
                  <Link to={`/update/${_id}`}><input className="btn btn-primary " type="button" value="Update Button" /></Link>
                </div>
            </div>
            </div>
        </div>
    );
    };

export default AllBookings;

