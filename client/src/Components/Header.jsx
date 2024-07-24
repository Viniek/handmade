import React, { useState } from "react";
import "./Components.css";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../userStore";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleLoginSignup = () => {
    setIsLoggedIn(true);
    navigate("/Signup");
  };
  return (
    <section className="header">
      <ul className="headerul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/sellers">Showcase</Link>
        </li>
      </ul>
      <div className="auth">
        {isLoggedIn ? (
          <>
            <span>Welcome, {user.fullname}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLoginSignup}>Login / Signup</button>
        )}
      </div>
    </section>
  );
}

export default Header;