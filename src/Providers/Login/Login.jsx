import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


import toast, {  Toaster} from 'react-hot-toast';

const Login = () => {
    const { signIn, googleLogin,} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      if(password.length < 6){
        toast.error('Password must at last 6 cheracters');
        return;
    }
      
 
      
    signIn(email, password)
    .then((result) => {
      const logedInuser = result.user;
      console.log(logedInuser);
  
     navigate(location?.state? location?.state : '/')
    })
    .catch(()=>{
  
      toast.error(' worng  password') 
  })
  toast.success('Login successfully')
};
const handleSubmitgoogleLogin = (event) =>{
  event()
  .then(res => console.log(res.user))
  .error(error=> console.log(error))
 };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" w-1/2 mr-12">{/* <img src={img} alt="" /> */}</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <button onClick={()=>handleSubmitgoogleLogin(googleLogin)} className="text-bold text-2xl btn btn-neutral">Google</button>
                    
            <p className="text-center my-4">
              New to Car Doctors{" "}
              <Link className="text-orange-600 font-bold " to="/signup">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
