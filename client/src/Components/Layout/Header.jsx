import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthcontext } from "../../Context/Auth";

const Header = () => {
  const [auth, setAuth] = useAuthcontext();

  const handleLogout = ()=>{
    setAuth({
      ...auth,
      user:null,
      token:''
    });
    localStorage.removeItem('auth');
    alert('Logout Successfully !')
  }

  return (
    <div>
      <div className="flex items-center justify-between bg-black text-white h-[10vh]">
        <Link to={"/"}>
          <h1>Logo</h1>
        </Link>
        <ul className="flex items-center">
          <NavLink to={"/"}>
            <li className="p-2">Home</li>
          </NavLink>

          <NavLink to={"/category"}>
            <li className="p-2">Category</li>
          </NavLink>
          {!auth.user ? (
            <>
              <NavLink to={"/register"}>
                <li className="p-2">Register</li>
              </NavLink>

              <NavLink to={"/login"}>
                <li className="p-2">Login</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink onClick={handleLogout} to={"/login"}>Logout</NavLink>
            </>
          )}

          <NavLink to={"/cart"}>
            <li className="p-2">Cart</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
