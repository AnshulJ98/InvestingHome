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
      <div class="container justify-content-center w-75">
        <div class="card m-3 w-75">
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
      <div class="container justify-content-center w-75">
        <div class="card m-3 w-75">
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
      <div class="container justify-content-center w-75">
        <div class="card m-3 w-75">
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
    </div>
  );
}

export default Tiers;
