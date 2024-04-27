import React from "react";
import "./Homepage.scss";
import {
  HeadphoneSolidIcon,
  NoCardIcon,
  PlayerIcon,
  SandClockIcon,
} from "../../../assets/img/svg";

const Homepage = () => {
  return (
    <div className="margin-top-minus88">
      <section className="bg-purple-img">
        <div className="homepage-section1-wrapper">
          <h1 className="text-center text-white mb-4">
            Capture Leads. <br className="d-block d-md-none" />
            Boost Sales. <br />
            Maximize Revenue.
          </h1>
          <p className="text-white text-center mb-4">
            World’s 1st dedicated venue management software to engage leads
            better and <br className="d-none d-md-block" />
            manage bookings effortlessly
          </p>
          <div className="btns-wrapper">
            <button className="btn btn-secondary border-rad-45 custom-btn me-3 fw-bold">
              Get Started
            </button>
            <button className="btn btn-light text-dark-blue border-rad-45 custom-btn fw-bold d-flex align-items-center justify-content-center">
              <PlayerIcon />
              <div className="ms-1">Schedule Demo</div>
            </button>
          </div>
          <div className="homesection-bottom-utils-wrapper text-white">
            <div className="d-flex">
              <div className="d-flex me-4">
                <NoCardIcon />
                <div className="ms-2 whitespace-nowrap">No card required</div>
              </div>
              <div className="d-flex me-4">
                <HeadphoneSolidIcon />
                <div className="ms-2 whitespace-nowrap">Dedicated venue experts</div>
              </div>
            </div>

            <div className="d-flex me-4">
              <SandClockIcon />
              <div className="ms-2">Quick set-up</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
