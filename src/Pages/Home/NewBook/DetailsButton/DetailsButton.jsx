import { Link } from "react-router-dom";

const DetailsButton = () => {
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src='https://i.ibb.co/PcCfTWs/aaed94f420a1d18dedd83709d76db329.jpg'
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
            <h1 className="text-2xl font-semibold">Name:{}</h1>
            <p className="text-xl font-sens"> AuthorName: </p>
            <p className="text-2xl font-semibold">Category:</p>
            <div className="rating rating-lg">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            </div>
          <h2 className="card-title">Price:{}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
      <div className="space-x-4">
        
            {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary" onClick={(borrowButton)=>document.getElementById('my_modal_1').showModal(borrowButton)}>Borrow Button</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-primary">Submit Button</button>
            </form>
            </div>
        </div>
        </dialog>
      <Link to={'/redButton'} className="btn btn-primary"> Red Button </Link>
      
      </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsButton;