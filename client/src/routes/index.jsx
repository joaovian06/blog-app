import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/";
import Navbar from "../components/navbar";
import LoginSignUp from "../components/login-sign-up";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
