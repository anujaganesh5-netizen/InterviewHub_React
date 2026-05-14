import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signup.css"
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create User
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // Save Username
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      alert("Signup Successful");

      // Navigate to Login Page
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={handleSignup}
      >
        <h2>Create Account</h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;