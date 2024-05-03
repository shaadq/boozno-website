import React from "react";
import "./Products.scss";
import ManagementSimplifiedTabs from "./tabs/ManagementSimplifiedTabs";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import bannerImg from "../../../assets/img/solution-page-banner-img.png";
import menuDeviceImg from "../../../assets/img/menu-device-img.svg";
import stepperImg from "../../../assets/img/journey-stepper.svg";
import stepperImgMobile from "../../../assets/img/journey-stepper-mobile.svg";
import value1 from "../../../assets/img/value-1.png";
import value2 from "../../../assets/img/value-2.png";
import value3 from "../../../assets/img/value-3.png";
import value4 from "../../../assets/img/value-4.png";
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

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 d-flex align-items-center">
              <div>
                <h2 className="section-title text-center text-lg-start text-dark-blue mb-4">
                  The values that drive <br /> everything we do
                </h2>
                <div className="section-subtitle text-center text-lg-start mb-4">
                  We are a small but growing team. Our expertise <br /> includes bringing efficiency to venue management <br /> tasks and ensuring seamless operations for our clients <br /> with personalised and reliable solutions.
                </div>
                <button className="btn btn-primary px-4 border-rad-45 d-none d-lg-block">Talk to Sales</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row values-cards-wrapper">
                <div className="col-6 mb-3 px-2">
                  <div className="collection-sales-card">
                    <img src={value1} className="mb-3" alt="" />
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Innovation</h5>
                    <p>Consistently strive to surpass the expectations you have from our venue management platform</p>
                  </div>
                </div>
                <div className="col-6 mb-3 px-2">
                  <div className="collection-sales-card custom-values-card">
                    <img src={value2} className="mb-3" alt="" />
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Accountability</h5>
                    <p>Take responsibility for everything on our platform, ensuring transparency in every aspect</p>
                  </div>
                </div>
                <div className="col-6 mb-4 px-2">
                  <div className="collection-sales-card">
                    <img src={value3} className="mb-3" alt="" />
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Reliability</h5>
                    <p>Enforce trust and dependability, ensuring a stable and consistent venue management experience</p>
                  </div>
                </div>
                <div className="col-6 mb-4 px-2">
                  <div className="collection-sales-card custom-values-card">
                    <img src={value4} className="mb-3" alt="" />
                    <h5 className="text-dark-blue mb-2 mb-lg-3">Commitment</h5>
                    <p>Dedicate ourselves wholeheartedly to your satisfaction, ensuring unwavering support and service</p>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-100 py-3 border-rad-45 d-lg-none">Talk to Sales</button>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section End*/}

      {/* Benefits Section */}
      <section className="py-5 mt-lg-5 position-relative">
        <div className="benefits-bg-mobile"></div>
        <div className="container">
          <div className="benefits-section-wrapper">
            <div className="benefits-bg"></div>
            <h1 className="section-title text-white mt-lg-4 mb-3">Benefits of using Boozno</h1>
            <div className="section-subtitle text-white mb-4">
              Elevate your venue's success story with Boozno, where efficiency isn't just a goal; it's a guarantee. <br /> Lead the way to profit perfection, making every management task a breeze.
            </div>
            <div className="solutions-benefits-wrapper">
              <div className="row">
                <div className="col-6 col-lg-3 border-bottom-lg-none border-bottom border-right border-grey">
                  <div className="benefit-item text-center mb-3 mb-lg-0">
                    <div className="perc-title text-purple">28%</div>
                    <div className="text-dark-blue">
                      Increase in <br className="d-block d-lg-none" /> monthly <br className="d-none d-lg-block" /> sales
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3 border-bottom-lg-none border-bottom border-right-lg border-grey">
                  <div className="benefit-item text-center ">
                    <div className="perc-title text-purple">33%</div>
                    <div className="text-dark-blue">
                      Improvement in <br className="d-block d-lg-none" /> sales <br className="d-none d-lg-block" /> productivity
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3  border-right border-grey">
                  <div className="benefit-item text-center mt-3 mt-lg-0">
                    <div className="perc-title text-purple">68%</div>
                    <div className="text-dark-blue">
                      More accuracy in <br className="d-block d-lg-none" /> sales <br className="d-none d-lg-block" /> forecasting
                    </div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="benefit-item text-center mt-3 mt-lg-0">
                    <div className="perc-title text-purple">45%</div>
                    <div className="text-dark-blue">
                      Decrease in <br className="d-block d-lg-none" /> sales <br className="d-none d-lg-block" /> cost
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section End */}

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
