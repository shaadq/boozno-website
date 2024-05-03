import React, { useState } from "react";
import "./Pricing.scss";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";
import { Form } from "react-bootstrap";
import img from "../../../assets/img/celebration.png";
import { CheckIconPurple } from "../../../assets/img/svg";

const PricingPage = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (e) => {
    setIsChecked(!isChecked);
  };

  let featureList = [
    "Reporting and Analytics",
    "Create Enquiry",
    "Duplicate Enquiry",
    "Create Quotation",
    "Create Visit",
    "Add Discount",
    "Add Menu",
    "User Management",
    "User Roles & Accessible",
    "Assign lead owner",
    "Timeline",
    "Contract document",
  ];
  return (
    <div>
      {/* Pricing Section */}
      <section className="py-5 mt-4">
        <div className="container mt-5">
          <h1 className="section-title text-dark-blue">
            the Perfect Plan for Your Business
          </h1>
          <div className="section-subtitle mb-3 text-center ">
            Explore a range of tailored plans designed to boost your business
            visibility and position you as a standout venue entrepreneur.
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div
              className={` ${
                !isChecked ? "text-darkgrey2 fw-semibold" : "text-light-grey"
              }`}
            >
              Bill Monthly
            </div>
            <div className="mx-2 switch-input-wrapper">
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={(e) => handleSwitchChange(e)}
                checked={isChecked}
              />
            </div>
            <div
              className={` ${
                isChecked ? "text-darkgrey2 fw-semibold" : "text-light-grey"
              }`}
            >
              Bill Annualy
            </div>
          </div>
          <div className="save-offer-wrapper mt-3">
            <img src={img} alt="" />
            <div className="text ms-2">Save up to 20% </div>
          </div>
          <div className="mt-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="plan-card scale-95">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Base</h5>
                    <div>2 Venues</div>
                  </div>
                  <div className="d-flex align-items-end justify-content-start text-purple mb-4">
                    <div className="title"> Coming Soon</div>
                    <div></div>
                  </div>
                  <div className="card-list mb-5">
                    {featureList.map((data, index) => (
                      <div
                        className="d-flex align-items-center mb-3"
                        key={index}
                      >
                        <CheckIconPurple />
                        <div className="ms-2 card-list-text">{data}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-outline-primary border-rad-45 w-100 py-3 fw-bold">
                    Coming Soon
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="plan-card border-purple">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Starter</h5>
                    <div>5 Venues</div>
                  </div>
                  <div className="d-flex align-items-end justify-content-start text-purple mb-4">
                    <div className="fw-bold title"> ₹2500</div>
                    <div className="mb-2">/User</div>
                  </div>
                  <div className="card-list mb-5">
                    {featureList.map((data, index) => (
                      <div
                        className="d-flex align-items-center mb-3"
                        key={index}
                      >
                        <CheckIconPurple />
                        <div className="ms-2 card-list-text">{data}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-primary border-rad-45 w-100 py-3 fw-bold">
                    Continue
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="plan-card scale-95">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Pro</h5>
                    <div>10 Venues</div>
                  </div>
                  <div className="d-flex align-items-end justify-content-start text-purple mb-4">
                    <div className="title">Coming Soon</div>
                  </div>
                  <div className="card-list mb-5">
                    {featureList.map((data, index) => (
                      <div
                        className="d-flex align-items-center mb-3"
                        key={index}
                      >
                        <CheckIconPurple />
                        <div className="ms-2 card-list-text">{data}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-outline-primary border-rad-45 w-100 py-3 fw-bold">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}

      <ReadyToTry />
      <FAQ />
      <RightAnswer />
    </div>
  );
};

export default PricingPage;
