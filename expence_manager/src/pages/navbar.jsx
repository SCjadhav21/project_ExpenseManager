import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const { auth, userData } = useContext(AuthContext);
  console.log(userData, auth);
  const getUserName = () => {
    let words = userData.name.split(" ");
    let firstLetters = words.map((word) => word.charAt(0));
    let result = firstLetters.join("");
    return result;
  };
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
        {!auth && (
          <Link id="pages" to="/login">
            login
          </Link>
        )}
        {auth && (
          <Link id="pages" className="user-name" to="/profile">
            {getUserName()}
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
