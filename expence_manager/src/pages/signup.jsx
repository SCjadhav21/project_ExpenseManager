import React from "react";
import "../css/signup.css";
const Signup = () => {
  return (
    <div>
      <h1 id="h1">Expence Manager</h1>
      <form>
        <h2>Sign Up</h2>
        <p>Full Name</p>
        <input id="name" type="text" placeholder="Enter your full name" />
        <p>Mobile</p>
        <input id="name" type="number" placeholder="Enter your full name" />
        <p>Email</p>
        <input type="email" placeholder="Enter email" id="email" />
        <p>Password</p>
        <input id="password" type="password" placeholder="Enter password" />

        <button className="button">SIGN UP</button>
        <p>
          Alredy have an Account? <a href="signin.html">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
