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
    bgImage={require("./asphalt-upscale.jpg")}
    bgImageAlt="the dog"
    strength={-500}
  >
    <div className="container px-5 py-5 justify-content-center">
      <div className="row g-3 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
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
      <div class="videoText">
        <div class="bg-video">
          <video
            class="bg-video__content"
            autoplay="true"
            muted="true"
            loop="true"
          >
            <source src="/LandingVideo.mp4" type="video/mp4"></source>
            Your browser is not supported!
          </video>
        </div>
        <span class="text">
          <h1 className="display-4 text-white landing fw-bold">
            We all deserve
          </h1>
          <h1 className="display-4 text-white text-center l1 fw-bold">
            a home
          </h1>
        </span>
      </div>

      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
        <div className="col-md-4 p-lg-5 my-5 ">
          <h1 className="display-4 text-black fw-normal"></h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink className="text-black" to="/"></NavLink>
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-4 p-lg-5 my-5 ">
          <h1 className="display-4  landing fw-bold">Next Gen</h1>
          <h1 className="display-4  l1 fw-bold">Business</h1>
          <hr className="text-black fs-1 fw-bold" width="50%"></hr>
          <p className="edgeTile fw-normal lead">
            Real estate market is booming and making it difficult for first time
            home buyers to buy house due to high deposit amount and surged in
            prices of house. We as HomeLord will help people save to buy house.
          </p>
        </div>
        <div className="col-md-4 p-lg-5 my-5 "></div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img width={"100%"} src="/3_onde-investir-em-2021.jpg"></img>
          </div>
          <div className="col-md-7 my-3 align-middle">
            <h2 className="featurette-heading display-6  fs-1">
              House Cleaning
            </h2>
            <p className="lead">
              <span className="fw-normal">$200.00 (Approx.)</span>
              <br></br>Price may vary as per the detail. For the times you need
              a touch of a professional to get a clean and fresh feel in your
              home, AK Janitorial will be there for you to take a load off from
              your hands.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="col-md-7 my-3 align-middle">
            <h2 className="featurette-heading display-6  fs-1">
              House Cleaning
            </h2>
            <p className="lead">
              <span className="fw-normal">$200.00 (Approx.)</span>
              <br></br>Price may vary as per the detail. For the times you need
              a touch of a professional to get a clean and fresh feel in your
              home, AK Janitorial will be there for you to take a load off from
              your hands.
            </p>
          </div>
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img width={"100%"} src="/3_onde-investir-em-2021.jpg"></img>
          </div>
        </div>
      </div>
      <Container></Container>
    </div>
  );
}

export default Home;
