import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
