import React, { useState } from "react";
import "../css/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  let [userData, setUserData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const handelChange = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (userData.mobile.length !== 10) {
      alert("Please enter valid mobile number");
    } else {
      axios("http://localhost:4500/user/register", {
        method: "POST",
        data: userData,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 201) {
            alert(
              "Registration successfull, We've created your account for you."
            );
            navigate("/login");
          } else {
            alert(
              "Acount has been Already Regestered, Please Login to account or Create with new Email."
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert(
            "Registration failed, Please Login to account or Create with new Email"
          );
        });
    }
  };
  return (
    <div>
      <h1 id="h1">Expense Manager</h1>
      <form onSubmit={handelSubmit}>
        <h2>Sign Up</h2>
        <p>Full Name</p>
        <input
          required
          id="name"
          name="name"
          onChange={handelChange}
          value={userData.name}
          type="text"
          placeholder="Enter your full name"
        />
        <p>Mobile</p>
        <input
          required
          id="name"
          name="mobile"
          onChange={handelChange}
          value={userData.mobile}
          type="number"
          placeholder="Enter your full name"
        />
        <p>Email</p>
        <input
          required
          type="email"
          name="email"
          onChange={handelChange}
          value={userData.email}
          placeholder="Enter email"
          id="email"
        />
        <p>Password</p>
        <input
          required
          id="password"
          name="password"
          onChange={handelChange}
          value={userData.password}
          type="password"
          placeholder="Enter password"
        />

        <button className="button">SIGN UP</button>
        <p>
          Alredy have an Account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
