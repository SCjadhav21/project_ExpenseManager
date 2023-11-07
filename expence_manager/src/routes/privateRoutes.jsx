import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoutes({ children }) {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    alert("Please Login first");
    return <Navigate to="/login" />;
  }
  return children;
}
