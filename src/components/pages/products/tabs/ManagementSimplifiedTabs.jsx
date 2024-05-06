import React, { useState } from "react";
import bookingimg from "../../../../assets/img/Booking.svg";
import availabilityimg from "../../../../assets/img/availabilitycalender.svg";
import inquiriesimg from "../../../../assets/img/inquiries.svg";
import mtoolsimg from "../../../../assets/img/mtools.svg";
import onboardingimg from "../../../../assets/img/onboarding.svg";
import secimg from "../../../../assets/img/security.svg";
import { AvailabilityCalenderActiveIcon, AvailabilityCalenderIcon, BookingIcon, BookingIconActive, InquiryIcon, InquiryIconActive, OnboardingIcon, OnboardingIconActive, RightArrowCircleWhite, SecurityIcon, SecurityIconActive, SettingIcon, SettingIconActive } from "../../../../assets/img/svg";
import TabContent from "./TabContent";
import "./Tabs.scss";

const ManagementSimplifiedTabs = () => {
  let tabContent = {
    AvailabilityCalender: {
      title: "Availability Calender",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: availabilityimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
    Inquiries: {
      title: "Inquiries",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: inquiriesimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
    Booking: {
      title: "Booking",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: bookingimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
    Onboarding: {
      title: "Onboarding",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: onboardingimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
    ManagementTools: {
      title: "Management Tools ",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: mtoolsimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
    Secuirty: {
      title: "Security",
      content: "Create, organise, and track inquiries for single or multiple days. Easily add and customise f&b packages or charge venue rentals. Include notes, reminders, and create quotations. Get real-time updates for overlapping inquiries, view billing summaries, and apply extra charges or discounts. Simplify your inquiry management with Boozno's all-in-one system.",
      img: secimg,
      points: ["Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager", "Funnel Management", "Follow-Up Manager"],
    },
  };
  const [tabList, setTabList] = useState([
    {
      title: "Availability Calender",
      icon: <AvailabilityCalenderIcon />,
      iconActive: <AvailabilityCalenderActiveIcon />,
      active: false,
      content: <TabContent content={tabContent.AvailabilityCalender} />,
    },
    {
      title: "Inquiries",
      icon: <InquiryIcon />,
      iconActive: <InquiryIconActive />,
      active: true,
      content: <TabContent content={tabContent.Inquiries} />,
    },
    {
      title: "Bookings",
      icon: <BookingIcon />,
      iconActive: <BookingIconActive />,
      active: false,
      content: <TabContent content={tabContent.Booking} />,
    },
    {
      title: "Onboarding",
      icon: <OnboardingIcon />,
      iconActive: <OnboardingIconActive />,
      active: false,
      content: <TabContent content={tabContent.Onboarding} />,
    },
    {
      title: "Management Tools ",
      icon: <SettingIcon />,
      iconActive: <SettingIconActive />,
      active: false,
      content: <TabContent content={tabContent.ManagementTools} />,
    },
    {
      title: "Security",
      icon: <SecurityIcon />,
      iconActive: <SecurityIconActive />,
      active: false,
      content: <TabContent content={tabContent.Secuirty} />,
    },
  ]);

  const handleItemClick = (itemTitle) => {
    setTabList((prevState) => prevState.map((item) => (item.title === itemTitle ? { ...item, active: true } : { ...item, active: false })));
  };
  return (
    <div className="custom-tab-wrapper">
      <div className="custom-tab-list">
        {tabList.map((item, index) => (
          <div className={`custom-tab-item ${item.active ? "active" : ""}`} key={index} onClick={() => handleItemClick(item.title)}>
            <div className="item">
              {item.active ? item.iconActive : item.icon}
              {/* {item.icon} */}
              <div className="title">{item.title}</div>
            </div>
            {item.active ? (
              <div className="custom">
                <div className="right-arrow-wrapper">
                  <RightArrowCircleWhite />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="custom-tab-content">
        {tabList.map((item, index) => (
          <div key={index}>{item.active ? <div>{item.content}</div> : ""}</div>
        ))}
      </div>
    </div>
  );
};

export default ManagementSimplifiedTabs;
