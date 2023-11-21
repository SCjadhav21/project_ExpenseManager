import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { getUserName } from "../components/functions";

import "../css/navbar.css";
const Navbar = () => {
  const { auth, userData } = useContext(AuthContext);

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
        <h2>Expense Manager</h2>
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
        {!auth && (
          <Link id="pages" to="/login">
            login
          </Link>
        )}
        {auth && (
          <Link id="pages" className="user-name" to="/profile">
            {getUserName(userData.name)}
          </Link>
        )}
        <span></span>
        <Link id="pages" to="/about">
          about
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
