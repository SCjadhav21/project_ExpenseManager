import Home from "./pages/home";
import { Route, Routes, Link } from "react-router-dom";

import Navbar from "./pages/navbar";

import NotFoundPage from "./pages/notFoundPage";
import Transactions from "./pages/transactions";
import Overview from "./pages/overview";
import Login from "./pages/login";
import Signup from "./pages/signup";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* // App.js
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Login} />
      </Routes>{" "} */}
    </>
  );
}

export default App;
