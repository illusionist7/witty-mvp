import React from "react";
import { Link } from "react-router-dom";
import imgTwo from "../../assets/body-image.png";
import imgThree from "../../assets/team-work.png";
import imgFour from "../../assets/body-image.png"
import imgFive from "../../assets/marketPlace.png"
import "./BodyContent.css";

const BodyContent = () => {
  return (
    <div style={{ background: "#DEE1E6FF" }}>
      <div className="container" style={{ paddingTop: "6%" }}>
        <div className="text-center mb-5 header-text">Why join us?</div>
        <div className="row mb-5 ms-2 me-2 items">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2" style={{paddingTop : "14%"}}>
            <div>
              <div className="mb-4">
                <h2>Own the technology in few clicks</h2>
              </div>
              <div className="mb-4">
                Display your businesses' online persona like never before.
                Selling your trip packages online becomes easier than ever.
              </div>
              <div>
                <button className="btn btn-primary btn-sm me-5">TRY NOW</button>
                <span>
                  <Link style={{ textDecoration: "none" }} to="/faq">
                    Learn more
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 body-image-container">
            <img
              className="body-image"
              src={imgTwo}
              alt="sideImage"
            ></img>
          </div>
        </div>

        <div className="row mb-5 ms-2 me-2 items">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 d-flex align-items-center body-image-container">
            <img
              className="body-image"
              src={imgThree}
              alt="sideImage"
            ></img>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 d-flex justify-content-center align-items-center">
            <div>
              <div className="mb-4">
                <h2>Build Relation, Not competition</h2>
              </div>
              <div className="mb-4">
                Partner with other businesses and expand your portofolio. We
                strongly believe that Travel community when come together, the
                businesses can create a dent in the human history of Travel
                economy.
              </div>
              <div>
                <button className="btn btn-primary btn-sm me-5">TRY NOW</button>
                <span>
                  <Link style={{ textDecoration: "none" }} to="/faq">
                    Learn more
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5 ms-2 me-2 items">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2" style={{paddingTop : "14%"}}>
            <div>
              <div className="mb-4">
                <h2>Don't settle, show your presence</h2>
              </div>
              <div className="mb-4">
                Showcase your packages in the marketplace of Tours & Travel
                packages. Leave the easiness and accessibility with us do what
                you rock at!
              </div>
              <div>
                <button className="btn btn-primary btn-sm me-5">TRY NOW</button>
                <span>
                  <Link style={{ textDecoration: "none" }} to="/faq">
                    Learn more
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 d-flex align-items-center body-image-container">
            <img
              className="body-image"
              src={imgFive}
              alt="sideImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
