import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Tiers() {
  return (
    <div>
      <div className="text-center mt-3 pt-3">
        <h1 className="display-6 fs-1 fw-normal">
          Making your house <br></br>
          <p className="display-6 fs-2">The home of your dreams</p>
        </h1>
      </div>
      <div class="container justify-content-center ">
        <div class="card m-3">
          <div class="card-body">
            <h5 class="card-title">Gold Tier</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div class="container justify-content-center">
        <div class="card m-3">
          <div class="card-body">
            <h5 class="card-title">Silve Tier</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div class="container justify-content-center">
        <div class="card m-3">
          <div class="card-body">
            <h5 class="card-title">Bronze Tier</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div className="p-3 m-3">
        <h1 className="display-6 text-center fs-1">
          Frequently Asked Questions <br></br>
        </h1>
        <h1 className="display-6 mt-5 fs-2">
          Residential <br></br>
        </h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What would be Price for Cleaning 1 bedroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show lead fs-6 "
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">Minimum charges of $99</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR2">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR2"
              >
                What would be Price for Cleaning 1 bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR2"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR2"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges of $69
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR3">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR3"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR3"
              >
                What would be price for Each additional bedroom after 1 bedroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR3"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR3"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $79
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR4">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR4"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR4"
              >
                What would be price for Each additional bathroom after 1
                bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR4"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR4"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $49
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR5">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR5"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR5"
              >
                What would be base price for a home with 1 bedroom and 1
                bathroom?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR5"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR5"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $200
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR6">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR6"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR6"
              >
                Estimated cost for cleaning a 1BHK apartment?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR6"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR6"
            >
              <div className="accordion-body lead fs-6">
                Minimum charges $199 in surrey and $250 in vancouver
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR7">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR7"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR7"
              >
                Any pricing variations for graveyard shifts?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR7"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR7"
            >
              <div className="accordion-body lead fs-6">+ $25-50</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR8">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR8"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR8"
              >
                How would the pricing for Pressure Washing be calculated? What
                would be pricing per sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR8"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR8"
            >
              <div className="accordion-body lead fs-6">
                Depends on the job a small patio $199-249, Large deck $349-$399
                , pressure washer drive way price depends on the size of the
                driveway and side walk, walkway & depends on how dirty it is .
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR9">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR9"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR9"
              >
                How would the pricing for Sanitization be calculated? What would
                be pricing per sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR9"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR9"
            >
              <div className="accordion-body lead fs-6">$32-$35 per hour</div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR10">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR10"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR10"
              >
                How would the pricing for Renovation Cleaning be calculated?
                What would be pricing for 1BHK .?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR10"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR10"
            >
              <div className="accordion-body lead fs-6">
                During renovations 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoR11">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoR11"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoR11"
              >
                How would the pricing for New House Cleaning be calculated? What
                would be pricing for 1BHK .?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoR11"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoR11"
            >
              <div className="accordion-body lead fs-6">
                Final cleaning 0.55-0.65 sq.ft.
              </div>
            </div>
          </div>
        </div>
        <h1 className="display-6  fs-2 mt-5">
          Commercial <br></br>
        </h1>
        <div className="accordion" id="accordionPanelsStayOpenCommercial">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOneC1">
              <button
                className="accordion-button lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOneC1"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOneC1"
              >
                Do you want to have diffentriated pricing options for
                residential and commercial customers?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOneC1"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOneC1"
            >
              <div className="accordion-body lead fs-6">
                Yes , commercial cleaning is based on daily, weekly, bi-weekly,
                monthly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoC2">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoC2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoC2"
              >
                How would the pricing be differentiated?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoC2"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC2"
            >
              <div className="accordion-body lead fs-6">
                Prices will be calculated by the conditions of the property.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwoC3">
              <button
                className="accordion-button collapsed lead fs-6 fw-normal"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoC3"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoC3"
              >
                What would be pricing sq. ft.?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoC3"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoC3"
            >
              <div className="accordion-body lead fs-6">
                We will be doing Fogging Services also minimum charges of $99 or
                $50 hr if it’s weekly. overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiers;
