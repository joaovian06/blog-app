import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/";
import Navbar from "../components/navbar";
import SignUp from "../components/sign-up";
import SignIn from "../components/sign-in";
import PostForm from "../components/post-form";

export default function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/new" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}
