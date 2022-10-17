import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const Auth=useSelector((store)=>store.Authreducer.isAuth)
  console.log(Auth)
  return (
    <div style={{display:"flex",justifyContent:"space-between"}} data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {!Auth?
       <Link to="/login" > <button data-testid="navbar-login-button">LOGIN</button></Link>
        :""}
      </div>
    </div>
  );
};

export default Navbar;
