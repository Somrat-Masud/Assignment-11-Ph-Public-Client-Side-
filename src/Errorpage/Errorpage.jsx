import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
        <div className="text-center mt-8  text-slate-300 text-6xl font-semibold"> 
            <h2> Opps Sorry !!!
                404 Not Found
                 </h2>
          <Link className="btn btn-primary" to="/">Go back to home</Link>
        </div>


        </div>
    );
};

 
export default Errorpage;