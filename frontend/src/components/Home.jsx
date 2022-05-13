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
      <Container></Container>
    </div>
  );
}

export default Home;
