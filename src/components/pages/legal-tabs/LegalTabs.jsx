import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./LegalTabs.scss";

const LegalTabs = () => {
  const location = useLocation();
  const [legaltabs, setLegalTabs] = useState([
    {
      title: "Terms and Conditions",
      subtitle: "Terms of service are the legal agreements between a service provider and a person who wants to use that service.",
      link: "/legal/termsconditons",
      active: true,
    },
    {
      title: "Privacy Policy",
      subtitle: "The Policy below is effective since August 10, 2023. You can read the previous version of the Privacy Policy.",
      link: "/legal/privacypolicy",
      active: false,
    },
    {
      title: "Cookies Policy",
      subtitle: "Last updated: April 12, 2023",
      link: "/legal/cookiespolicy",
      active: false,
    },
    {
      title: "GDPR",
      maintitle: "GDPR Compliance",
      subtitle: "Everything you need to know about Boozno.com's compliance with the Do Not Sell My Personal Information",
      link: "/legal/gdpr",
      active: false,
    },
    {
      title: "Do No Sell MPI",
      maintitle: "Do Not Sell My Personal Information",
      subtitle: "Everything you need to know about Boozno.com's compliance with the Do Not Sell My Personal Information",
      link: "/legal/mpi",
      active: false,
    },
  ]);

  useEffect(() => {
    setLegalTabs((prevTabs) =>
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
          {legaltabs.map((d, i) => (
            <div key={i}>{d.active ? <h1 className="section-title text-dark-blue">{d.maintitle ? d.maintitle : d.title}</h1> : <></>}</div>
          ))}

          {legaltabs.map((d, i) => (
            <div key={i}>{d.active ? <p className="section-subtitle">{d.subtitle}</p> : ""}</div>
          ))}

          <div className="custom-page-tabs mt-5">
            {legaltabs.map((d, i) => (
              <Link to={`${d.link}`} key={i}>
                <div className={`tab-item ${d.active ? "active" : ""}`}>{d.title}</div>
              </Link>
            ))}
          </div>

          <div className="content">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalTabs;
