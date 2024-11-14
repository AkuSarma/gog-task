import React from "react";
import { Link } from "react-router-dom";
// Home | About Us | Contact Us | Login
const Header = () => {
  return (
    <nav className="flex flex-row justify-center items-center sticky top-0 shadow-md h-10">
      <Link className="mx-1 underline text-blue-600" to="/">Home</Link>

      <span> | </span>

      <Link className="mx-1 underline text-blue-600" to="/about">About Us</Link>

      <span> | </span>

      <Link className="mx-1 underline text-blue-600" to="/contact">Contact</Link>

      <span> | </span>
      <Link className="mx-1 underline text-blue-600" to="/login">Login</Link>
    </nav>
  );
};

export default Header;
