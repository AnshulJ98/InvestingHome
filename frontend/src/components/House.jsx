import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function House() {
  return (
    <div>
      <div className="text-center mt-3 pt-3">
        <h1 className="display-6 fs-1 fw-normal">
          House 1 <br></br>
          <p className="display-6 fs-2">The home of your dreams</p>
        </h1>
      </div>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-6 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="bootstrap-docs.png"
              alt=""
              width="720"
            ></img>
          </div>
          <div className="col-lg-5 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold  fs-1">
              CA$ 403,549
              <p className="lead fs-6">pledged of CA$ 9,179 goal</p>
            </h1>
            <h1 className="display-4 fw-normal  fs-1 pt-3">
              03,549
              <p className="lead fs-6">backers</p>
            </h1>

            <h1 className="display-4 fw-normal  fs-1 py-3">
              03,549
              <p className="lead fs-6">backers</p>
            </h1>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <NavLink to="/tiers">
                <span className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  {" "}
                  Reserve
                </span>
              </NavLink>
            </div>
            <p className="lead fs-6">
              All or nothing. This project will only be funded if it reaches its
              goal by Thu, May 5 2022 9:58 AM EDT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
