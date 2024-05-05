import React from "react";
import "./Ready.scss";
import img from "../../../assets/img/ready-img.svg";

const ReadyToTry = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="ready-container">
          <div className="bg-pink"></div>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end ps-lg-5 pb-0 pb-lg-5 mt-3 mt-lg-0">
              <div className="mb-1 ps-3 ps-lg-0">
                <h1 className="section-title text-start text-dark-blue">
                  Ready to try Boozno?
                </h1>
                <p className="section-subtitle text-start">
                  Try Boozno and take back control of{" "}
                  <br className="d-block d-lg-none" /> your day
                </p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary px-4 border-rad-45 me-2 me-lg-3">
                    Talk to Sales
                  </button>
                  <button className="btn btn-outline-primary px-4 border-rad-45 d-none d-lg-block">
                    Get Started
                  </button>
                  <div className="text-purple d-block d-lg-none">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end justify-content-lg-center">
              <img src={img} className="ready-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTry;
