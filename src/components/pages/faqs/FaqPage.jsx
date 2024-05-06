import React, { useState } from "react";
import RightAnswer from "../../common/right-answer/RightAnswer";
import DynamicTabContent from "./DynamicTabContent";
import { productFaq, servicesFaq, subPlanFaq } from "./data";
import "./style.scss";

const FaqPage = () => {
  const [tabs, setTabs] = useState([
    {
      title: "Product",
      content: productFaq,
      active: true,
    },
    {
      title: "Subscription Plan",
      content: subPlanFaq,
      active: false,
    },
    {
      title: "Services",
      content: servicesFaq,
      active: false,
    },
  ]);

  const handleTabClick = (index) => {
    const updatedTabs = tabs.map((tab, i) => {
      return { ...tab, active: i === index };
    });
    setTabs(updatedTabs);
  };

  return (
    <div className="pt-0 pt-lg-4">
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="section-title text-dark-blue mb-3">Frequently Asked Questions</h2>
          <div className="section-subtitle">Lorem ipsum is a placeholder text commonly used to demoommonly used to demonstrate the visual form</div>
          <div className="custom-page-tabs my-5">
            {tabs.map((data, i) => (
              <div className={`tab-item ${data.active ? "active" : ""}`} key={i} onClick={() => handleTabClick(i)}>
                {data.title}
              </div>
            ))}
          </div>
          <div className="custom-faq-accordion mt-4">
            {tabs.map((data, index) => (
              <div key={index}>{data.active ? <DynamicTabContent data={data.content} /> : <div></div>}</div>
            ))}
          </div>
        </div>
      </section>
      <RightAnswer />
    </div>
  );
};

export default FaqPage;
