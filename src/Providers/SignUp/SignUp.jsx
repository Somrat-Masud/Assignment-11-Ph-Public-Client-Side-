import { Link,useNavigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";

import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser,handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate()
  const handeleSignUP = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = event.target.img.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, img, email, password);

    if (password.length < 6) {
      toast.error("Error: Password must be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Error: Password must contain at least one uppercase letter");
      return;
    }
    if (!/[!@#$%^&*-_+={|:;"'<,>.?/]/.test(password)) {
      toast.error("Input is not alphanumeric");
      return;
    }

    createUser(email, password)
    .then(() => {
      handleUpdateProfile(name, img)
          .then(() => {
              toast.success('User created successfully');
              navigate('/login')

          })
  })

      .catch((error) => {
        console.log(error);
      });
    toast("Register Successfully");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className=" w-1/2 mr-12">{/* <img src={img} alt="" /> */}</div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register Now </h1>
            <form onSubmit={handeleSignUP}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="img"
                />
              </div>
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
                  value="Register Now"
                />
              </div>
            </form>
            <p className="text-center my-4">
              Al Ready Have Account?{" "}
              <Link className="text-orange-600 font-bold " to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUp;
