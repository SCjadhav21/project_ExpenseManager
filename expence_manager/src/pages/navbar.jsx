import React from "react";
import "../css/navbar.css";
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
        <a id="pages" href="index.html">
          home
        </a>
        <span></span>
        <a id="pages" href="#">
          transactions
        </a>
        <span></span>
        <a id="pages" href="#">
          Overview
        </a>
        <span></span>
        <a id="pages" href="#">
          login
        </a>
        <span></span>
        <a id="pages" href="#">
          about
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
