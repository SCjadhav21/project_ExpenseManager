import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = React.useState(false);
  const [userData, setUserData] = React.useState({
    token: "",
    name: "",
    email: "",
    mobile: "",
  });
  const loginUser = (data) => {
    setAuth(true);
    setUserData({
      token: data.token,
      name: data.name,
      email: data.email,
      mobile: data.mobile,
    });
  };
  const logOutUser = () => {
    setAuth(false);
    setUserData({
      token: "",
      name: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <AuthContext.Provider value={{ auth, userData, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
