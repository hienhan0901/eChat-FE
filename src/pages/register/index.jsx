import React from "react";
import { Link } from "react-router-dom";
import "../login/login.css";

export default function Register(props) {
  return (
    <>
      <div className="loginContainer">
        <img className="loginLogo" src="/echat-logo.png" alt="logo" />
        <form className="loginForm">
          <input
            type="text"
            placeholder="Username"
            require
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Password"
            require
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Confirm password"
            require
            className="loginInput"
          />
          <button type="submit" className="loginButton">
            Sign Up
          </button>
          <span className=" loginSpan">
            Already have an account?&nbsp;
            <Link to="/login" className="loginRegisterLink">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}
