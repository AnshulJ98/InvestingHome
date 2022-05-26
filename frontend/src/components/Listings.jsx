import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Listings.css";
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
  ></Parallax>
);
function Listings() {
  return (
    <div>
      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light listing-banner">
        <div className="col-md-4 p-lg-5 my-5 "></div>

        <div className="col-md-3 p-lg-5 p-md-2 my-5 ">
          <h1 className="display-4  landing fw-bold">Properties</h1>
          <h1 className="display-4  l1 fw-bold">Listings</h1>
          <p className="lead text-white fw-normal">
            We have hand-picked the latest and the best properties to invest in
            the current times for best benefits in the future. Check out below,
            a number of properties and choose the one of your liking to invest
            in.
          </p>
        </div>

        <div className="col-md-4 p-lg-5 my-5 "></div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="text-center mt-5 pt-5">
        <h1 className="display-6  l1 fw-bold">
          Tiers of Investment <br></br>
        </h1>
        <div className="row text-center justify-content-around">
          <div className="col-md-5 text-center">
            <p className="lead fw-normal">
              You can book a number of slots in a property for a fixed amount.
              The investment comes in 3 tiers, Gold being the highest in price
              and least number of slots, Silver being less costly than gold with
              more slots and Bronze with the least price and the maximum number
              of slots.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 justify-content-center">
        <div className="row g-3 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
          <div className="feature col text-center px-4 edgeTile">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="15%"
                className="edgeTile"
                src="Chrisdesign-Effect-Letters-alphabet-gold-27.svg"
              ></img>
            </div>
            <h2 className="edgeTile display-6 fw-bold gold fs-1">Gold Tier</h2>
            <p className="edgeTile fw-normal lead">
              By investing in a Gold Tier slot, you invest a larger sum of money
              and get more equity with your slot.
            </p>
          </div>
          <div className="pb-4">
            <div className="feature col text-center middleTile px-4">
              <div className="feature-icon icon-square text-center middleTile mb-3">
                <img
                  width="25%"
                  className="edgeTile mt-5"
                  src="Chrisdesign-Effect-Letters-alphabet-silver-28.svg"
                ></img>
              </div>
              <h2 className="middleTile display-6 fw-bold silver fs-1">
                Silver Tier
              </h2>
              <p className="edgeTile fw-normal lead">
                By investing in a Silver Tier slot, you invest a smaller sum of
                money compared to Gold Tier and get a little less equity.
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
          <div className="feature col edgeTile text-center px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="30%"
                className="edgeTile"
                src="Chrisdesign-Effect-Letters-alphabet-silver-29.svg"
              ></img>
            </div>
            <h2 className="edgeTile display-6 fw-bold bronze fs-1">
              Bronze Tier
            </h2>
            <p className="edgeTile fw-normal lead">
              By investing in a Bronze Tier slot, you have to spend least amount
              of money and you get less equity with that slot.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-5 mb-5">
        <h1 className="display-6 l1 fw-bold">Our Listings Portifolio</h1>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img house-cleaning-img"></div>
                <img
                  width="100%"
                  className="edgeTile"
                  src="home-landing.jpg"
                ></img>
                <div className="text-left p-4">
                  <span className="lead l1 d-block fw-bold fs-3">
                    25 Village Lark Crescent
                  </span>
                  <span className="lead landing d-block fw-bold fs-3">
                    $1,200,000
                  </span>

                  <p className="lead ">
                    <br></br>A recently built home in the heart of Brampton.
                  </p>
                  <NavLink to="/services/housecleaning"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img office-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Office Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    AK Janitorial is at your service to make your workplace tidy
                    and uplift the mental wellbeing of all the employees.
                  </p>

                  <NavLink to="/services/officecleaning"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img renovation-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Renovation Cleaning</span>
                  <p className="lead ">
                    <br></br>
                    Gave Your house a makeover? But left a Big Mess? No Worries!
                    AK Janitorial is here to help. From dust to debris we clean
                    it all.
                  </p>

                  <NavLink to="/services/renovationcleaning">
                    {" "}
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img sanitization-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Sanitization</span>
                  <p className="lead ">
                    <br></br>
                    With AK Janitorial’s service you get that peace of mind
                    where we make sure that the spaces are sanitized and safe
                    for use.
                  </p>

                  <NavLink to="/services/sanitization"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img pressure-washing-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">Pressure Washing</span>
                  <p className="lead ">
                    <br></br>
                    AK Janitorial’s pressure washing services makes sure that
                    you have one less stubborn stain to worry about in day to
                    day life.
                  </p>

                  <NavLink to="/services/pressurewashing"> Read More</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 ftco-animate fadeInUp ftco-animated">
              <div className="block-7">
                <div className="img moving-cleaning-img"></div>
                <div className="text-center p-4">
                  <span className="excerpt d-block">
                    Move In/ Move Out Cleaning
                  </span>
                  <p className="lead ">
                    <br></br>
                    Relieve some stress of move in/move out clean up. Just focus
                    on your belongings and leave the cleaning to AK Janitorials.
                  </p>
                  <NavLink to="/services/sanitization"> Read More</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container></Container>
    </div>
  );
}

export default Listings;
