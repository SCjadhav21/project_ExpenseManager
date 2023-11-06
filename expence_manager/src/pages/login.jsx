import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    let { type, value } = e.target;
    setUserData({ ...userData, [type]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    alert("all data has been submitted");
  };
  return (
    <div>
      {" "}
      <h1 id="h1">Expence Manager</h1>
      <form onSubmit={handelSubmit}>
        <h2>Sign In</h2>

        <p>Email</p>
        <input
          value={userData.email}
          onChange={handelChange}
          required
          type="email"
          placeholder="Enter email"
          id="email"
        />
        <p>Password</p>
        <input
          value={userData.password}
          onChange={handelChange}
          required
          id="password"
          type="Password"
          placeholder="Enter password"
        />
        <button className="button" role="button">
          Sign In
        </button>

        <p>
          Don't have an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
