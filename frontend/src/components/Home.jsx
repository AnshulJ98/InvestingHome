import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ParallaxProvider,
  useParallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import { Parallax } from "react-parallax";
const Container = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={require("./architecture-1477100.jpg")}
    bgImageAlt="the dog"
    strength={-500}
  >
    <div className="text-left container mt-4 justify-content-center">
      <h3 className="display-6 fs-3">Lorem Ipsum</h3>
      <h1 className="display-6  fs-1">Lorem Ipsum is simply dummy text</h1>
      <p className="lead ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.Lorem Ipsum is simply.<br></br>
        Lorem Ipsum is simply dummy text.
      </p>
    </div>
    <div className="container justify-content-center cont1">
      <div className="row g-3 py-5 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 justify-content-center">
        <div className="feature col d-flex text-left px-4 edgeTile ">
          <div className="feature-icon edgeTile w-25">
            <img
              width="85%"
              className="edgeTile"
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
            ></img>
          </div>
          <p className="edgeTile  fw-normal lead">Lorem Ipsum is simply</p>
        </div>
        <div className="feature col d-flex text-left px-4 edgeTile ">
          <div className="feature-icon edgeTile w-25">
            <img
              width="85%"
              className="edgeTile"
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
            ></img>
          </div>
          <p className="edgeTile  fw-normal lead">Lorem Ipsum is simply</p>
        </div>
        <div className="feature col d-flex text-left px-4 edgeTile ">
          <div className="feature-icon edgeTile w-25">
            <img
              width="85%"
              className="edgeTile"
              src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
            ></img>
          </div>
          <p className="edgeTile lead  fw-normal">Lorem Ipsum is simply</p>
        </div>
      </div>
    </div>
    <div className="container px-5 py-5 justify-content-center">
      <div className="row g-3 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
        <div className="feature col text-center px-4 edgeTile">
          <div className="feature-icon edgeTile mt-5 mb-3">
            <img
              width="25%"
              className="edgeTile"
              src="Expert-Employee-1-300x300-1.png"
            ></img>
          </div>
          <h2 className="edgeTile display-6  fs-1">Expert Employees</h2>
          <p className="edgeTile lead">
            We have helped clean hundreds of homes and apartments in Lower
            Mainland, Abbotsford, Mission & Vancouver, Surrey
          </p>
        </div>
        <div className="pb-4">
          <div className="feature col text-center middleTile px-4">
            <div className="feature-icon icon-square text-center middleTile mb-3">
              <img
                width="25%"
                className="edgeTile mt-5"
                src="Affordable-Package-1-300x300-2.png"
              ></img>
            </div>
            <h2 className="middleTile text-white display-6  fs-1">
              Affordable Package
            </h2>
            <p className="middleTile text-white lead">
              We provide professional and affordable home cleaning services in
              Lower Mainland, BC. We charge reasonable prices for awesome
              cleaning. What you see is what you get.<br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
        <div className="feature col edgeTile text-center px-4">
          <div className="feature-icon edgeTile mt-5 mb-3">
            <img
              width="25%"
              className="edgeTile"
              src="100-Satisfaction-300x300-1.png"
            ></img>
          </div>
          <h2 className="edgeTile display-6  fs-1">100% Satisfaction</h2>
          <p className="edgeTile lead">
            We take pride in offering you peace of mind with a 100% Customer
            Satisfaction Guarantee for our professional cleaning service
          </p>
        </div>
      </div>
    </div>
    <div className="container px-5 py-5 justify-content-center">
      <div className="row g-3 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
        <div className="feature col text-center px-4 edgeTile">
          <div className="feature-icon edgeTile mt-5 mb-3">
            <img
              width="25%"
              className="edgeTile"
              src="Expert-Employee-1-300x300-1.png"
            ></img>
          </div>
          <h2 className="edgeTile display-6  fs-1">Expert Employees</h2>
          <p className="edgeTile lead">
            We have helped clean hundreds of homes and apartments in Lower
            Mainland, Abbotsford, Mission & Vancouver, Surrey
          </p>
        </div>
        <div className="pb-4">
          <div className="feature col text-center middleTile px-4">
            <div className="feature-icon icon-square text-center middleTile mb-3">
              <img
                width="25%"
                className="edgeTile mt-5"
                src="Affordable-Package-1-300x300-2.png"
              ></img>
            </div>
            <h2 className="middleTile text-white display-6  fs-1">
              Affordable Package
            </h2>
            <p className="middleTile text-white lead">
              We provide professional and affordable home cleaning services in
              Lower Mainland, BC. We charge reasonable prices for awesome
              cleaning. What you see is what you get.<br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
        <div className="feature col edgeTile text-center px-4">
          <div className="feature-icon edgeTile mt-5 mb-3">
            <img
              width="25%"
              className="edgeTile"
              src="100-Satisfaction-300x300-1.png"
            ></img>
          </div>
          <h2 className="edgeTile display-6  fs-1">100% Satisfaction</h2>
          <p className="edgeTile lead">
            We take pride in offering you peace of mind with a 100% Customer
            Satisfaction Guarantee for our professional cleaning service
          </p>
        </div>
      </div>
    </div>
    <div className="container justify-content-center">
      <div className="text-center">
        <img
          width="7%"
          className="edgeTile text-center mb-5"
          src="Half-Circles.png"
        ></img>
        <h1 className="display-6  fs-1">
          Simple, Transparent Pricing <br></br>
        </h1>
      </div>
    </div>
  </Parallax>
);
function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
              <div className="col-md-5 p-lg-5 ms-auto m-2 box">
                <h1 className="display-4 fw-normal">Punny headline</h1>
                <p className="lead ">
                  And an even wittier subheading to boot. Jumpstart your
                  marketing efforts with this example based on Apple’s marketing
                  pages.
                </p>
                <NavLink to="/house">
                  <span className="btn btn-secondary"> Book Now1</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
              <div className="col-md-5 p-lg-5 ms-auto m-2 box">
                <h1 className="display-4 fw-normal">Punny headline</h1>
                <p className="lead ">
                  And an even wittier subheading to boot. Jumpstart your
                  marketing efforts with this example based on Apple’s marketing
                  pages.
                </p>
                <NavLink to="/house">
                  <span className="btn btn-secondary"> Book Now2</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
              <div className="col-md-5 p-lg-5 ms-auto m-2 box">
                <h1 className="display-4 fw-normal">Punny headline</h1>
                <p className="lead ">
                  And an even wittier subheading to boot. Jumpstart your
                  marketing efforts with this example based on Apple’s marketing
                  pages.
                </p>
                <NavLink to="/house">
                  <span className="btn btn-secondary"> Book Now3</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Container></Container>
    </div>
  );
}

export default Home;
