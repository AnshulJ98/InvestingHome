import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-2 "></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Investing House
              </h6>

              <p>Demo Text</p>

              <div>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-0">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Toronto, On, Canada
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                akartar@hotmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 1 416-111-111
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 1 416-111-111
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Features</h6>
              <p>
                <NavLink to="/services/serviceshome" className="text-reset">
                  Our Services
                </NavLink>
              </p>
              <p>
                <NavLink to="/testimonials" className="text-reset">
                  Testimonials
                </NavLink>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <NavLink to="/aboutus" className="text-reset">
                  About Us
                </NavLink>
              </p>
              <p>
                <NavLink to="/contactus" className="text-reset">
                  Contact Us
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2022-{new Date().getFullYear()} Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Inveting House. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}
