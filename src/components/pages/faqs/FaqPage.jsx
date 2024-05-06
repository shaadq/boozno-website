import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import RightAnswer from "../../common/right-answer/RightAnswer";
import { productFaq, servicesFaq, subPlanFaq } from "./data";
import "./style.scss";

const FaqPage = () => {
  const location = useLocation();
  const [tabs, setTabs] = useState([
    {
      title: "Product",
      link: "/faqs/product",
      content: productFaq,
      active: true,
    },
    {
      title: "Subscription Plan",
      link: "/faqs/subscriptionplan",
      content: subPlanFaq,
      active: false,
    },
    {
      title: "Services",
      link: "/faqs/services",
      content: servicesFaq,
      active: false,
    },
  ]);

  useEffect(() => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: location.pathname === tab.link,
      }))
    );
  }, [location]);

  return (
    <div className="pt-0 pt-lg-4">
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="section-title text-dark-blue mb-3">Frequently Asked Questions</h2>
          <div className="section-subtitle">Lorem ipsum is a placeholder text commonly used to demoommonly used to demonstrate the visual form</div>
          <div className="custom-page-tabs my-5">
            {tabs.map((data, i) => (
              <Link to={`${data.link}`} key={i}>
                <div className={`tab-item ${data.active ? "active" : ""}`}>{data.title}</div>
              </Link>
            ))}
          </div>
          <div className="custom-faq-accordion mt-4">
            <Outlet />
          </div>
        </div>
      </section>
      <RightAnswer />
    </div>
  );
};

export default FaqPage;
