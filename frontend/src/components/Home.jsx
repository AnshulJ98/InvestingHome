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
      <div className="text-center roadmap ">
        <h1 className="display-4   text-center  fw-bold ">Roadmap</h1>
      </div>
      <div className="row g-3 py-5  justify-content-center">
        <div className="container mt-5 py-5 justify-content-space-evenly ">
          <div className="row featurette align-items-center justify-content-center ">
            <div className="img-responsive col-md-5 mb-3 text-center">
              <img
                className="story-img"
                width={"40%"}
                src="/240_F_300419923_VXKyomUED380Ys0ff8LP81sfTuYA4eEP.jpg"
              ></img>
            </div>
            <div className="col-md-4 my-3 align-middle">
              <h5 className="featurette-heading display-6 text-white roadmap-step fs-5 fw-bold">
                STEP 1
              </h5>

              <p className="lead fw-normal text-white">
                Select from a list of our hand picked High Growth Investment
                Properties
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 justify-content-center">
        <div className="container mt-5 py-5 justify-content-space-evenly ">
          <div className="row g-3 featurette align-items-center justify-content-center">
            <div className="col-md-3 my-3 align-middle">
              <h5 className="featurette-heading display-6 text-white roadmap-step fs-5 fw-bold">
                STEP 2
              </h5>

              <p className="lead fw-normal text-white">
                Buy as many slots against your savings
              </p>
            </div>
            <div className="img-responsive col-md-5 mb-3 text-center">
              <img
                className="story-img"
                width={"40%"}
                src="/240_F_278748643_lXhc4o18ylzHYqRG5HbFrw0uRJbURnR3.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3 py-5  justify-content-center">
        <div className="container mt-5 py-5 justify-content-space-evenly ">
          <div className="row featurette align-items-center justify-content-center ">
            <div className="img-responsive col-md-5 mb-3 text-center">
              <img
                className="story-img"
                width={"40%"}
                src="/240_F_278748643_lXhc4o18ylzHYqRG5HbFrw0uRJbURnR3.jpg"
              ></img>
            </div>
            <div className="col-md-4 my-3 align-middle">
              <h5 className="featurette-heading display-6 text-white roadmap-step fs-5 fw-bold">
                STEP 3
              </h5>

              <p className="lead fw-normal text-white">
                Periodically keep on buying more slots to accumulate more equity
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 justify-content-center">
        <div className="container mt-5 py-5 justify-content-space-evenly ">
          <div className="row g-3 featurette align-items-center justify-content-center">
            <div className="col-md-3 my-3 align-middle">
              <h5 className="featurette-heading display-6 text-white roadmap-step fs-5 fw-bold">
                STEP 4
              </h5>

              <p className="lead fw-normal text-white">
                Meet your equity goal of 5%, 10% or 20% or more that you require
                to buy your dream house
              </p>
            </div>
            <div className="img-responsive col-md-5 mb-3 text-center">
              <img
                className="story-img"
                width={"40%"}
                src="/72_aporte-familiar.webp"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="text-center">
          <img
            width="90%"
            className="edgeTile text-center mb-5"
            src="/kisspng-portable-network-graphics-house-home-building-real-modern-house-free-png-image-png-arts-5cfa73f22438b3.0376090615599175541484.png"
          ></img>
          <h1 className="display-6 fw-bold roadmap-final-step text-center fs-1">
            Final Step
          </h1>
          <p className="lead fw-normal text-white">
            The increase in your equity from HomeLord will be your gateway
            towards <br></br> your dream home (or any other thing that you have
            been saving for)
          </p>
        </div>
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
          <h1 className="display-4 text-white text-center landing-video fw-bold">
            We all deserve
          </h1>
          <h1 className="display-4 text-white text-center landing-video-1 fw-bold">
            a home
          </h1>
          <div className="text-center mt-5">
            <img
              className="img-responsive text-center"
              width="30%"
              src="/homelord.jpg"
            ></img>
          </div>
        </span>
      </div>

      <div className="position-relative overflow-hidden p-5 p-md-5 m-0  bg-light home-banner">
        <div className="col-md-4 p-lg-5 my-5 ">
          <h1 className="display-4 text-black fw-normal"></h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"></li>
            </ol>
          </nav>
        </div>
        <div className="col-md-4 p-lg-5 my-5 ">
          <h1 className="display-4  landing fw-bold">
            Housing Market Doesn't Wait
          </h1>
          <h1 className="display-4  l1 fw-bold">Why Do You?</h1>
          <hr className="text-black fs-1 fw-bold" width="50%"></hr>
        </div>
        <div className="col-md-4 p-lg-5 my-5 "></div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img
              className="story-img"
              width={"70%"}
              src="/3_onde-investir-em-2021.jpg"
            ></img>
          </div>
          <div className="col-md-7 my-3 align-middle">
            <h5 className="featurette-heading display-6  l1 fs-3 fw-bold">
              OUR STORY
            </h5>
            <h1 className="featurette-heading display-4 fw-bold landing fs-1">
              How did we come about <br></br>the idea of HomeLord
            </h1>
            <p className="lead fw-normal">
              <br></br>
              We were ourselves 1st time home buyer and due to numerous flaws in
              the system and misleading realtors and mortgage brokers we lost
              $15,000 in the process to buy that home and we lost the deal and
              lost our hard earned $15,000.
              <br></br>
              <br></br>
              There is a nice quote that the money is never lost if you learn
              lessons from your mistakes. We realized we are not alone in this
              problem, many others face this too. So we started this journey to
              help others to get help ourselves.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-5 justify-content-center ">
        <div className="row featurette align-items-center">
          <div className="col-md-7 my-3 align-middle">
            <h5 className="featurette-heading display-6  l1 fs-3 fw-bold">
              OVERVIEW
            </h5>
            <h1 className="featurette-heading display-6 fw-bold landing fs-1">
              Everyone deserves to <br></br>buy their dream home
            </h1>
            <p className="lead fw-normal">
              <br></br>Real Estate prices have been rising constantly and it has
              been predicted that they will continue to climb in the future as
              well. To enter the real estate market, most of the time 20% down
              payment is required and saving that 20% gets even harder as the
              prices keep rising.
              <br></br>
              <br></br>
              By Investing in HomeLord, you can enter the housing market at a
              much less cost upfront. You can invest in portion of equity of a
              house and then experience the same rate of return on your money as
              the real estate market. By recieving the same rate of growth for
              your money as real estate, you will be able to have an edge and
              finally save the 20% downpayment you need.
            </p>
          </div>
          <div className="img-responsive col-md-5 mb-3 text-center">
            <img
              className="story-img"
              width={"70%"}
              src="/rd_icerikyonetimi-scaled.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <Container></Container>
    </div>
  );
}

export default Home;
