import React from "react";
import logo from "../assets/logo.jpeg";
import "./Header.css";
function Header() {
  return (
    <header className="navbar">
      <div className="left-section">
        <img src={logo} alt="logo" />
        <h3 className="site-title">InterviewHub</h3>
      </div>
      <div className="nav-icons">
        <ul>
          <li>Home</li>
          <li>Jobs</li>
          <li>Resume Builder</li>
          <li>Interview Prep</li>
        </ul>
      </div>
      <div className="right-section">
        <p>Profile</p>
        <h3 id="navUser">Hello, User</h3>
        <button type="button" id="logoutBtn" className="login-btn">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
