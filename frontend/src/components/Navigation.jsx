import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img className="img-responsive" width="60%" src="/logo512.png"></img>
        </NavLink>
        <NavLink
          className="display-6  fs-1 fw-normal text-decoration-none navbar-toggler border-0"
          to="/"
        >
          {" "}
          Investing House{" "}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNavDropdown"
        >
          <div className="justify-content-center">
            <ul className="navbar-nav px-2">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div id="call-us" className="nav-item nav-pill px-2 call-us"></div>

          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
