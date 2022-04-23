import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

      <div className="text-center mt-3 pt-3">
        <h1 className="display-6 fs-1 ">
          Lorem Ipsum <br></br>is simply dummy text
        </h1>
      </div>

      <div className="text-left container justify-content-center">
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
          <div className="feature col text-left px-4 edgeTile">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
              ></img>
            </div>
            <p className="edgeTile  fw-normal lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature col edgeTile text-left px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
              ></img>
            </div>
            <p className="edgeTile  fw-normal lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="feature col edgeTile text-left px-4">
            <div className="feature-icon edgeTile mt-5 mb-3">
              <img
                width="25%"
                className="edgeTile"
                src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/storybook.svg"
              ></img>
            </div>
            <p className="edgeTile lead  fw-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
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

      <div
        className="container text-center my-3"
        dangerouslySetInnerHTML={{
          __html: `<video className="app__backgroundVideo" id="landing-video" controls autoplay loop muted playsinline>
      <source src="" type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
        }}
      />
    </div>
  );
}

export default Home;
