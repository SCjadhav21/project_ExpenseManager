import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../css/profile.css";
const Profile = () => {
  const { auth, userData, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) {
    navigate("/login");
  }

  return (
    <div class="profile">
      <div class="profile-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAsKoeapC2BUVEqP-kHRpku7SwNgOQerr3w&usqp=CAU"
          alt="Profile Image"
        />
      </div>
      <div class="name">{userData.name}</div>
      <div class="email">{userData.email}</div>
      <button class="logout-button" onClick={logOutUser}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
