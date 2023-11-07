import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Signup from "../pages/signup";
import Overview from "../pages/overview";
import Transactions from "../pages/transactions";
import NotFoundPage from "../pages/notFoundPage";
import PrivateRoutes from "./privateRoutes";
import About from "../pages/about";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/overview"
        element={
          <PrivateRoutes>
            <Overview />
          </PrivateRoutes>
        }
      />
      <Route
        path="/transactions"
        element={
          <PrivateRoutes>
            <Transactions />
          </PrivateRoutes>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AllRoutes;
