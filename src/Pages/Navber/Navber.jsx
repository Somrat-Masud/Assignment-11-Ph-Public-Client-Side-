import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";

const Navber = () => {

    const {user, logOut} =  useContext(AuthContext)
const  handleLogout =() => {
logOut()
.then(() => {})
.catch(error => console.log(error))
}

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    {user?.email ? <>
        <li><Link to={'/addbook'}>AddBook</Link></li>
    <li><Link to='/allbook'>AllBook</Link></li>
    <li><Link to='/borrowedbook'>BorrowedBooks</Link></li>
    <li><button onClick={handleLogout}>Log Out</button></li>
    </>
     :
     <li><Link to='/login'>Login</Link></li>
    }
   

    </>
  return (
    <div className="navbar h-24  bg-[#f3f6f9]  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        <a className="text-xl m-8 font-serif"><img className="h-16 object-cover w-24" src="https://i.ibb.co/19Ppds9/download.jpg" alt="" /> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      {
           user?.email ? <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} alt={user.displayName} />
                           </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                </li>
                                <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                 >Logout</button>
                               </li>
                          </ul>
                       </div>
                        :
                      <Link to='/login'>
                  <button className="btn btn-sm  btn-ghost">Login</button>
               </Link>
           }
      </div>
    </div>
  );
};

export default Navber;
