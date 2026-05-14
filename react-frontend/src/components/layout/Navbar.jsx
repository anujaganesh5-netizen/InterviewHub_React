import React from 'react';

import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom';

import {
  signOut,
} from "firebase/auth";

import { auth }
from '../../firebase';

import {
  useAuth,
} from '../../context/AuthContext';

import '../../styles/header.css';

const Navbar = () => {

  const { user } = useAuth();

  const navigate = useNavigate();

  // LOGOUT
  const handleLogout = async () => {

    await signOut(auth);

    alert("Logout Successful");

    navigate("/login");
  };

  return (

    <header className="navbar">

      {/* LEFT */}
      <div className="left-section">

        <img
          src="/assets/logo.jpeg"
          alt="Logo"
        />

        <h3 className="site-title">
          InterviewHub
        </h3>

      </div>

      {/* CENTER */}
      <div className="nav-icons">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/jobs">
          Jobs
        </NavLink>

        <NavLink to="/resume">
          Resume Builder
        </NavLink>

        <NavLink to="/interview-prep">
          Interview Prep
        </NavLink>

      </div>

      {/* RIGHT */}
      <div className="right-section">

        <Link
          className="profile"
          to="/profile"
        >
          <i className="fa-regular fa-circle-user"></i>
        </Link>

        <h3>
          Hello,
          {
            user
              ? user.displayName
              : " User"
          }
        </h3>

        {

          user ? (

            <button
              className="login-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          ) : (

            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

          )

        }

      </div>

    </header>
  );
};

export default Navbar;