import React from "react";
import "./navbar.css";
import Logo from "./../../Logo/logo";
import Flag from "./../../../asserts/flag.PNG";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="nav-logo">
          <Logo />
          <div className="logo-text">Paradise Competitions</div>
        </div>
        <div className="nav-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Competitions
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                How to Play
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Winners
              </a>
            </li>
            <li className="nav-item lang-link">
              <div className="language">
                <img src={Flag} alt="" />
                <span>EN</span>
              </div>
              <a href="" className="nav-link link-round client-link">
                Client Login
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link link-round register-link">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
