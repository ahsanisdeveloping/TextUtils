import React from "react";
import {Link} from 'react-router-dom'
import propTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} myNavbar${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" >
          <label id="darkModeLabel" className={`text-${props.mode==='light'?'dark':'light'}`}>Enable Dark Mode</label>
            <div className="form-check form-switch " >
            
              <input
                onClick={props.toggleMode}
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
              />
              
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "TextUtils",
};
