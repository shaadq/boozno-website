import React, { useState } from "react";
import "./Pricing.scss";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";
import { Form } from "react-bootstrap";
import img from "../../../assets/img/celebration.png";
import {
  CheckIconPurple,
  GreyDashIcon,
  PurpleCheckIconStyle,
} from "../../../assets/img/svg";

const PricingPage = () => {
  const [planShow, setPlanShow] = useState(false);
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
  let plansList = [
    {
      title: "Reporting and Analytics",
      trial: true,
      starter: true,
      advance: true,
    },
    {
      title: "Create Enquiry",
      trial: false,
      starter: true,
      advance: false,
    },
    {
      title: "Duplicate Enquiry",
      trial: true,
      starter: false,
      advance: true,
    },
    {
      title: "Create Quotation",
      trial: false,
      starter: true,
      advance: true,
    },
    {
      title: "Create Visit",
      trial: true,
      starter: true,
      advance: false,
    },
    {
      title: "Add Discount",
      trial: false,
      starter: true,
      advance: true,
    },
    {
      title: "Add Menu",
      trial: false,
      starter: false,
      advance: true,
    },
    {
      title: "User Management",
      trial: true,
      starter: true,
      advance: false,
    },
    {
      title: "User Roles & Accessible",
      trial: false,
      starter: true,
      advance: true,
    },
    {
      title: "Assign lead owner",
      trial: false,
      starter: true,
      advance: true,
    },
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
              className={`w-98 text-center ${
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
              className={`w-98 text-center ${
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
          <div className="mt-5 mb-4">
            <div className="row">
              <div className="col-lg-4 mb-4">
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
                  <button className="btn btn-outline-primary border-rad-45 w-100 py-3">
                    Coming Soon
                  </button>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="plan-card border-purple">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Starter</h5>
                    <div>5 Venues</div>
                  </div>
                  <div className="d-flex align-items-end justify-content-start text-purple mb-4">
                    <div className="fw-bold title"> ₹2500</div>
                    <div className="mb-2">/User</div>
                  </div>
                  <div className="card-list mb-4">
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
                  <div className="no-of-users-wrapper mb-4">
                    <h6 className="mb-0">No. of Users</h6>
                    <div className="counter-wrapper">
                      <div className="icon-wrapper fw-bold text-dark-blue ">
                        {/* <MinusIcon /> */}-
                      </div>
                      <div className="px-2 fw-semibold">3</div>
                      <div className="icon-wrapper fw-bold text-dark-blue">
                        {/* <PlusIcon /> */}+
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary border-rad-45 w-100 py-3">
                    Continue
                  </button>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
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
                  <button className="btn btn-outline-primary border-rad-45 w-100 py-3">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fw-semibold text-center">
            {planShow ? "To hide all the details" : "To view all the details"}
            <span
              className="text-purple ms-1 cursor-pointer"
              onClick={() => setPlanShow(!planShow)}
            >
              Click Here
            </span>
          </div>
          {planShow ? (
            <div className="py-4 mt-3">
              <div className="row fw-semibold px-4 plans-table-titles">
                <div className="col-6 col-lg-3 mb-3">
                  <div className="plans-table-title">Compare plans</div>
                </div>
                <div className="col-2 col-lg-3 mb-3 text-center">
                  <div className="text-grey2">Trial</div>
                </div>
                <div className="col-2 col-lg-3 mb-3 text-center">
                  <div className="text-grey2 ">Starter</div>
                </div>
                <div className="col-2 col-lg-3 mb-3 text-center">
                  <div className="text-grey2">Advance</div>
                </div>
              </div>
              <div className="plans-list-wrapper px-4 py-3">
                {plansList.map((data, i) => (
                  <div
                    className={`row list-item ${
                      i === plansList.length - 1 ? "border-none" : ""
                    }`}
                    key={i}
                  >
                    <div className="col-6 col-lg-3">
                      <div className="text-grey3 whitespace-nowrap">
                        {data.title}
                      </div>
                    </div>
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        {data.trial ? (
                          <PurpleCheckIconStyle />
                        ) : (
                          <GreyDashIcon />
                        )}
                      </div>
                    </div>{" "}
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        {data.starter ? (
                          <PurpleCheckIconStyle />
                        ) : (
                          <GreyDashIcon />
                        )}
                      </div>
                    </div>{" "}
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        {data.advance ? (
                          <PurpleCheckIconStyle />
                        ) : (
                          <GreyDashIcon />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
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
