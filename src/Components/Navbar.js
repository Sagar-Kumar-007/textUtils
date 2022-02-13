import React from "react";
import PropTypes from "prop-types";
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/textUtils">
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
                <Link className="nav-link active" aria-current="page" to="/textUtils">
                  {props.tab1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textUtils/about">
                  {props.tab2}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode==='dark'?'Light':'Dark'} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  tab1: PropTypes.string.isRequired,
  tab2: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Text Here",
  tab1: "Tab1 Text Here",
  tab2: "Tab2 Text Here",
};
