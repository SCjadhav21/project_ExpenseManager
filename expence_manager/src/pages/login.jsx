import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { userLogin } from "../components/api";

import "../css/login.css";

const Login = () => {
  const { auth, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
    if (userData.email && userData.password) {
      userLogin(userData)
        .then((res) => {
          if (res.status === 201) {
            alert("Login Successfull, You've Logged In your account.");

            loginUser({
              email: res.data.email,
              name: res.data.name,
              mobile: res.data.mobile,
              token: res.data.token,
            });
            navigate("/");
          } else {
            alert("Wrong Credentials, Please Check your Email or Password.");
          }
        })
        .catch((err) => {
          alert("Error: " + err);
          console.log(err);
        });
    } else {
      alert("Some filed are Empty, Please fill all the fields");
    }
  };

  if (auth) {
    navigate("/");
  }
  return (
    <div>
      {" "}
      <h1 id="h1">Expense Manager</h1>
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
