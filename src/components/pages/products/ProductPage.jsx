import React from "react";
import "./Products.scss";
import ManagementSimplifiedTabs from "./tabs/ManagementSimplifiedTabs";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import bannerImg from "../../../assets/img/solution-page-banner-img.png";
import menuDeviceImg from "../../../assets/img/menu-device-img.svg";
import stepperImg from "../../../assets/img/journey-stepper.svg";
import stepperImgMobile from "../../../assets/img/journey-stepper-mobile.svg";
import lockImg from "../../../assets/img/privacy-img.svg";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";

const ProductPage = () => {
  return (
    <div>
      {/* Banner CTA */}
      <section className="py-5 solution-first-section">
        <div className="container d-flex align-items-center h-100">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center mb-5">
              <div className="d-flex flex-column d-lg-block ps-lg-4">
                <h1 className="banner-page-title text-dark-blue text-center text-lg-start">
                  Expertly Manage <br className="d-none d-lg-block" /> Venues with <br className="d-none d-lg-block" /> Boozno
                </h1>
                <div className="section-subtitle mb-4 text-center text-lg-start">
                  For businesses who need a powerful solution to streamline <br className="d-none d-lg-block" /> inquiries and bookings.
                </div>
                <button className="m-auto btn btn-primary border-rad-45 px-4">Get Started</button>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0">
              <img src={bannerImg} className="w-100 solution-banner-img" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner CTA End*/}

      {/* Management Simplified Tabs */}
      <section className="py-5">
        <h2 className="section-title center text-dark-blue">Venue Management Simplified</h2>
        <div className="section-subtitle mb-5">Boozno lets you manage your venues, track your leads, and handle bookings all within one single platform. So say goodbye to complexities and hello to efficiency.</div>
        <div className="container">
          <ManagementSimplifiedTabs />
        </div>
      </section>
      {/* Management Simplified Tabs End */}

      {/* Multi Device Support  */}
      <section className="py-5">
        <div className="container">
          <div className="menu-device-support-wrapper bg-light-purple py-4">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center ps-4 ps-lg-5 mb-4 mb-lg-0">
                <div>
                  <h2 className="section-title text-start text-black">
                    Multi Devices Support <br className="d-none d-lg-block" /> for Boozno
                  </h2>
                  <div className="section-subtitle text-start mb-4">
                    Boozno will soon offer seamless multi-device support <br className="d-none d-lg-block" /> for enhanced accessibility and convenience.
                  </div>
                  <button className="btn btn-outline-primary px-4 mx-auto border-rad-12">Coming Soon!!</button>
                </div>
              </div>
              <div className="col-lg-6">
                <img src={menuDeviceImg} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Multi Device Support End  */}

      {/* Privacy */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                <div className="mb-3 mb-lg-0">
                  <img src={lockImg} alt="" />
                </div>
                <h2 className="ms-3 section-title text-center text-lg-start text-dark-blue">
                  Your privacy is <br /> our responsibility
                </h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="fs-18 section-subtitle text-center text-lg-start mb-4">We prioritise safeguarding your private information, ensuring trust and confidentiality are upheld in our relationship. Your data shared on our platform is not used in any unauthorised way. We neither own nor sell your data, upholding our commitment to your trust.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Privacy End */}

      {/* Journey Stepper */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-dark-blue">Start your journey Now!</h2>
          <div className="section-subtitle mb-5">Get Boozno right away to script your business success story!</div>
          <div className="mb-5 d-flex justify-content-center">
            <img src={stepperImgMobile} className="d-lg-none w-80" alt="" draggable={false} />
            <img src={stepperImg} className="d-none d-lg-block w-100" alt="" draggable={false} />
          </div>
          <div className="d-flex justify-content-center">
            <button className="start-now-btn btn btn-outline-primary border-rad-45">Start Now</button>
          </div>
        </div>
      </section>
      {/* Journey Stepper End */}

      {/* Common Sections */}
      <ReadyToTry />
      <FAQ />
      <RightAnswer />
      {/* Common Sections End */}
    </div>
  );
};

export default ProductPage;
