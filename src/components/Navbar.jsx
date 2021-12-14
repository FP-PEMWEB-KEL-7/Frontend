import React from "react";
import Logo from "../assets/images/medium-logo.png";
import { UserCircleIcon, PlusIcon, CogIcon } from "@heroicons/react/solid";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Navbar = ({ loginScreen, isLogin }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" className="image" />
      </Link>
      {loginScreen === false && (
        <div className="right">
          {isLogin === false ? (
            <div className="loginButton">
              <Link to="/login" className="text">
                Login
              </Link>
            </div>
          ) : (
            <>
              <Link to="/write">
                <PlusIcon className="icon" />
              </Link>
              <Link to="/profile">
                <UserCircleIcon className="icon" />
              </Link>
              <Link to="/settings">
                <CogIcon className="icon" />
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
