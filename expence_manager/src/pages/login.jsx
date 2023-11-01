import React from "react";
import "../css/login.css";
const Login = () => {
  return (
    <div>
      {" "}
      <h1 id="h1">Expence Manager</h1>
      <form>
        <h2>Sign In</h2>

        <p>Email</p>
        <input type="email" placeholder="Enter email" id="email" />
        <p>Password</p>
        <input id="password" type="Password" placeholder="Enter password" />
        <button className="button" role="button">
          Sign In
        </button>

        <p>
          Don't have an Account? <a href="signup.html">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
