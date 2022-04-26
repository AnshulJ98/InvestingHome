import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function ContactUs() {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="contact">
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light contact-banner">
        <div className="col-md-4 p-lg-5 my-5 box">
          <h1 className="display-4 fw-normal text-black">Contact Us</h1>
          <hr className="text-black fs-1 fw-bold" width="50%"></hr>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink className="text-black" to="/">
                  Home
                </NavLink>
              </li>

              <li
                className="breadcrumb-item active text-black"
                aria-current="page"
              >
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container py-5 justify-content-center px-4">
        <div className="row featurette align-items-center">
          <div className="col-md-7  align-middle">
            <h2 className="featurette-heading display-6  fs-3">
              <span className="text-muted fs-4">
                Contact Information <br></br>
              </span>
              Have Any Questions?<br></br>
              Contact Us
            </h2>
            <div className="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Phone-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Phone <br></br>
                </span>
                <p>999-999-999, 999-999-9999</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Email-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Email Address <br></br>
                </span>
                <p>mail@mail.ca</p>
              </div>
            </div>
            <div className="col d-flex align-items-start py-2">
              <img
                width="8%"
                className="edgeTile"
                src="Contact-us-Location-300x300.png"
              ></img>
              <div className="mx-5">
                <span className="text-muted fs-6">
                  Locations <br></br>
                </span>
                <p>Greater Toronto Area, Ontario</p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="mb-3">
              <div className="mb-3">
                <form>
                  <textarea
                    value={contactUs.message}
                    onChange={(e) => {
                      setContactUs({
                        ...contactUs,
                        message: e.target.value,
                      });
                    }}
                    className="form-control mb-3"
                    id="exampleFormControlTextarea1"
                    cols="20"
                    rows="8"
                    placeholder="Enter your Message"
                    required
                  ></textarea>
                  <div className="row">
                    <div className="col-6">
                      <input
                        value={contactUs.name}
                        onChange={(e) => {
                          setContactUs({
                            ...contactUs,
                            name: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Your Name"
                        required
                      ></input>
                    </div>
                    <div className="col-6">
                      <input
                        value={contactUs.email}
                        onChange={(e) => {
                          setContactUs({
                            ...contactUs,
                            email: e.target.value,
                          });
                        }}
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Your Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary send-message"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="container pb-5">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1CMHZ5SPOU8nf0MnDpO0Ih_P-nZY&ehbc=2E312F"
          width="100%"
          height="450px"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
