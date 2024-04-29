import React, { useState } from "react";
import "./Products.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  AvailabilityCalenderIcon,
  BookingIcon,
  OnboardingIcon,
  RightArrowCircleWhite,
  SecurityIcon,
  SettingIcon,
} from "../../../assets/img/svg";

const ProductPage = () => {
  const [tabList, setTabList] = useState([
    {
      title: "Availability Calender",
      icon: <AvailabilityCalenderIcon />,
      active: true,
      content: "Availability Calender",
    },
    {
      title: "Inquiries",
      icon: <AvailabilityCalenderIcon />,
      active: false,
      content: "Inquiries",
    },
    {
      title: "Booking",
      icon: <BookingIcon />,
      active: false,
      content: "Booking",
    },
    {
      title: "Onboarding",
      icon: <OnboardingIcon />,
      active: false,
      content: "Onboarding",
    },
    {
      title: "Management Tools ",
      icon: <SettingIcon />,
      active: false,
      content: "Management Tools",
    },
    {
      title: "Secuirty",
      icon: <SecurityIcon />,
      active: false,
      content: "Secuirty",
    },
  ]);

  const handleItemClick = (itemTitle) => {
    setTabList((prevState) =>
      prevState.map((item) =>
        item.title === itemTitle
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  return (
    <div>
      <section className="py-5 mt-5">
        <div className="container">
          <div className="custom-tab-wrapper">
            <div className="custom-tab-list">
              {tabList.map((item, index) => (
                <div
                  className={`custom-tab-item ${item.active ? "active" : ""}`}
                  key={index}
                  onClick={() => handleItemClick(item.title)}
                >
                  <div className="d-flex align-items-center">
                    {item.icon}
                    <div className="title">{item.title}</div>
                  </div>
                  {item.active ? (
                    <div>
                      <RightArrowCircleWhite />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            <div className="custom-tab-content">
              {tabList.map((item, index) => (
                <div>{item.active ? <div>{item.content}</div> : ""}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
