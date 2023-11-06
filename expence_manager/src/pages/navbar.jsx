import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="main">
      <div>
        <img
          id="logo"
          width="50px"
          height="50px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyg0aP8lMEvra0ay_1ee2FuzoFqtbuTLNFxA&usqp=CAU"
          alt=""
        />
        <h2>Expence Manager</h2>
      </div>
      <nav id="navbar">
        <Link id="pages" to="/">
          home
        </Link>
        <span></span>
        <Link id="pages" to="/transactions">
          transactions
        </Link>
        <span></span>
        <Link id="pages" to="/overview">
          Overview
        </Link>
        <span></span>
        <Link id="pages" to="/login">
          login
        </Link>
        <span></span>
        <Link id="pages" to="/about">
          about
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
