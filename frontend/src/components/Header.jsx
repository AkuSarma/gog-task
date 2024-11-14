import React from 'react'
import { Link } from 'react-router-dom';
// Home | About Us | Contact Us | Login
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About Us</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header