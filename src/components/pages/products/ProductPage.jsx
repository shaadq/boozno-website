import React from "react";
import "./Products.scss";
import ManagementSimplifiedTabs from "./tabs/ManagementSimplifiedTabs";

const ProductPage = () => {
  return (
    <div>
      <section className="py-5 mt-5">
        <h2 className="section-title center text-dark-blue">
          Venue Management Simplified
        </h2>
        <div className="section-subtitle mb-5">
          Boozno lets you manage your venues, track your leads, and handle
          bookings all within one single platform. So say goodbye to
          complexities and hello to efficiency.
        </div>
        <div className="container">
          <ManagementSimplifiedTabs />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
