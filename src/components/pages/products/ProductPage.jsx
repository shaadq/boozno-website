import React from "react";
import "./Products.scss";
import ManagementSimplifiedTabs from "./tabs/ManagementSimplifiedTabs";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import bannerImg from "../../../assets/img/solution-page-banner-img.png";

const ProductPage = () => {
  return (
    <div>
      <section className="py-5 solution-first-section">
        <div className="container d-flex align-items-center h-100">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center mb-5">
              <div className="d-flex flex-column d-lg-block">
                <h1 className="banner-page-title section-title center text-dark-blue text-center text-lg-start">
                  Expertly Manage <br className="d-none d-lg-block" /> Venues with <br className="d-none d-lg-block" /> Boozno
                </h1>
                <div className="section-subtitle mb-4 text-center text-lg-start">
                  For businesses who need a powerful solution to streamline <br className="d-none d-lg-block" /> inquiries and bookings.
                </div>
                <button className="m-auto btn btn-primary border-rad-45 px-4">Get Started</button>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0">
              <img src={bannerImg} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <h2 className="section-title center text-dark-blue">Venue Management Simplified</h2>
        <div className="section-subtitle mb-5">Boozno lets you manage your venues, track your leads, and handle bookings all within one single platform. So say goodbye to complexities and hello to efficiency.</div>
        <div className="container">
          <ManagementSimplifiedTabs />
        </div>
      </section>

      {/* FAQ Section Start */}
      <FAQ />
      <RightAnswer />
      {/* FAQ Section End */}
    </div>
  );
};

export default ProductPage;
