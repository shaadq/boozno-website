import React, { useState } from "react";
import { Form } from "react-bootstrap";
import img from "../../../assets/img/celebration.png";
import valuesImg1 from "../../../assets/img/every-step1.svg";
import valuesImg2 from "../../../assets/img/every-step2.svg";
import valuesImg3 from "../../../assets/img/every-step3.svg";
import { CheckIconPurple, Get1, Get2, Get3, Get4, GreyDashIcon, PurpleCheckIconStyle } from "../../../assets/img/svg";
import FAQ from "../../common/faq/FAQ";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";
import RightAnswer from "../../common/right-answer/RightAnswer";
import PlanCard from "./PlanCard";
import "./Pricing.scss";
import { featureList, plansList, planCards } from "./data";

const PricingPage = () => {
  const [planShow, setPlanShow] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const handleSwitchChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      {/* Pricing Section */}
      <section className="py-5 mt-4">
        <div className="container mt-5">
          <h1 className="section-title text-dark-blue">the Perfect Plan for Your Business</h1>
          <div className="section-subtitle mb-3 text-center ">Explore a range of tailored plans designed to boost your business visibility and position you as a standout venue entrepreneur.</div>
          <div className="d-flex align-items-center justify-content-center">
            <div className={`w-98 text-center ${!isChecked ? "text-darkgrey2 fw-semibold" : "text-light-grey"}`}>Bill Monthly</div>
            <div className="mx-2 switch-input-wrapper">
              <Form.Check type="switch" id="custom-switch" onChange={(e) => handleSwitchChange(e)} checked={isChecked} />
            </div>
            <div className={`w-98 text-center ${isChecked ? "text-darkgrey2 fw-semibold" : "text-light-grey"}`}>Bill Annualy</div>
          </div>
          <div className="save-offer-wrapper mt-3">
            <img src={img} alt="" />
            <div className="text ms-2">Save up to 20% </div>
          </div>
          <div className="mt-5 mb-4">
            <div className="row">
              <div className="col-lg-4 mb-4 d-flex align-items-center justify-content-center">
                <PlanCard featureList={featureList} data={planCards.base} />
              </div>
              <div className="col-lg-4 mb-4">
                <PlanCard featureList={featureList} data={planCards.starter} isChecked={isChecked} />
              </div>
              <div className="col-lg-4 mb-4 d-flex align-items-center justify-content-center">
                <PlanCard featureList={featureList} data={planCards.pro} />
              </div>
            </div>
          </div>
          <div className="fw-semibold text-center">
            {planShow ? "To hide all the details" : "To view all the details"}
            <span className="text-purple ms-1 cursor-pointer" onClick={() => setPlanShow(!planShow)}>
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
                  <div className={`row list-item ${i === plansList.length - 1 ? "border-none" : ""}`} key={i}>
                    <div className="col-6 col-lg-3">
                      <div className="text-grey3 whitespace-nowrap">{data.title}</div>
                    </div>
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">{data.trial ? <PurpleCheckIconStyle /> : <GreyDashIcon />}</div>
                    </div>{" "}
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">{data.starter ? <PurpleCheckIconStyle /> : <GreyDashIcon />}</div>
                    </div>{" "}
                    <div className="col-2 col-lg-3">
                      <div className="h-100 d-flex align-items-center justify-content-center">{data.advance ? <PurpleCheckIconStyle /> : <GreyDashIcon />}</div>
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

      {/* 2 Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="pricing-2-cards-card text-center">
                <div className="custom-bg-incard"></div>
                <div className="px-3">
                  <h4 className="text-dark-blue">Need A Custom Build?</h4>
                  <p className="text-grey2">For an enterprise solution, get in touch with us</p>
                </div>

                <button className="btn btn-outline-success border-rad-45 px-4">Get In Touch</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-2-cards-card text-center">
                <div className="custom-bg-incard"></div>
                <div className="px-4">
                  <h4 className="text-dark-blue">First time with Boozno</h4>
                  <p className="text-grey2">Take your business to new heights with Boozno and enjoy a trial plan along with other valuable resources.</p>
                </div>
                <button className="btn btn-success border-rad-45 px-4">Ask For Trial</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2 Cards Section End*/}

      {/* Every Step Value Section */}
      <section className="py-5">
        <div className="container">
          <h1 className="section-title text-dark-blue">We're with you every step of the way</h1>
          <div className="section-subtitle">Guiding You Through Each Milestone, Always Supporting</div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4">
              <div className="pricing-values-card text-center">
                <div className="card-white-bg"></div>
                <img src={valuesImg1} className="mb-4" alt="" />
                <div className="px-3 pb-2">
                  <h5 className="text-dark-blue mb-3">Dedicated Support Manager</h5>
                  <p className="text-grey2">Don't know where to start? A dedicated support manager will help set up your account faster according to your specific goals and obstacles.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="pricing-values-card text-center">
                <div className="card-white-bg"></div>
                <img src={valuesImg2} className="mb-4" alt="" />
                <div className="px-3 pb-2">
                  <h5 className="text-dark-blue mb-3">24/7 Support</h5>

                  <p className="text-grey2">Questions, suggestions, troubleshooting ⁠— our customer care team is always here to help you get the answers faster.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="pricing-values-card text-center">
                <div className="card-white-bg"></div>
                <img src={valuesImg3} className="mb-4" alt="" />
                <div className="px-3 pb-2">
                  <h5 className="text-dark-blue mb-3">Extensive Help Center</h5>
                  <p className="text-grey2">Step-by-step tool guides, beginner-friendly glossary and quick solutions for your queries, accessible at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Every Step Value Section End */}

      {/* Get by Subscribing */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 d-flex align-items-center">
              <div>
                <h2 className="section-title text-center text-lg-start text-dark-blue mb-4">
                  What do you get by <br />
                  subscribing paid plan
                </h2>
                <div className="section-subtitle text-center text-lg-start mb-4">
                  Lorem ipsum is a placeholder text commonly used to <br /> demonstrate the visual form of a document.
                </div>
                <button className="btn btn-primary px-4 border-rad-45 d-none d-lg-block">Talk to Sales</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row values-cards-wrapper">
                <div className="col-6 mb-3 px-2">
                  <div className="collection-sales-card">
                    <div className="mb-4 mt-2">
                      <Get1 />
                    </div>
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Gain full control</h5>
                    <p>Seize complete command with our paid plan, empowering you to manage every aspect of your experience effortlessly and efficiently</p>
                  </div>
                </div>
                <div className="col-6 mb-3 px-2">
                  <div className="collection-sales-card custom-values-card">
                    <div className="mb-4 mt-2">
                      <Get2 />
                    </div>
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Dedicated support</h5>
                    <p>Experience personalized assistance with our dedicated support team, ensuring your questions are answered promptly and your needs are met.</p>
                  </div>
                </div>
                <div className="col-6 mb-4 px-2">
                  <div className="collection-sales-card">
                    <div className="mb-4 mt-3">
                      <Get3 />
                    </div>
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Get 30-days trial</h5>
                    <p>Enjoy a risk-free 30-day trial, giving you a taste of premium features without any commitment or strings attached.</p>
                  </div>
                </div>
                <div className="col-6 mb-4 px-2">
                  <div className="collection-sales-card custom-values-card">
                    <div className="mb-4 mt-3">
                      <Get4 />
                    </div>
                    <h5 className="text-dark-blue mb-2 mb-lg-3">End to end Solution</h5>
                    <p>Receive a comprehensive end-to-end solution, streamlining every aspect for you, from start to finish, ensuring a seamless and efficient experience.</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-100 py-3 border-rad-45 d-lg-none">Talk to Sales</button>
            </div>
          </div>
        </div>
      </section>
      {/* Get by Subscribing End */}

      <ReadyToTry />
      <FAQ />
      <RightAnswer />
    </div>
  );
};

export default PricingPage;
