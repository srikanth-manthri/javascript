import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
  return (
    <header id="header">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav id="nav">
        <ul className="navbar-right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/clients">Projects/Clients</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
