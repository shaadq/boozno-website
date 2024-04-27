import React from "react";
import "./Homepage.scss";
import {
  HeadphoneSolidIcon,
  NoCardIcon,
  PlayerIcon,
  SandClockIcon,
  TopRightArrowIcon,
  TopRightArrowIconWhite,
} from "../../../assets/img/svg";
import img1 from "../../../assets/img/sales-1.png";

const Homepage = () => {
  let salesList = [
    {
      img: img1,
      title: "Dashboard",
      desc: "Empower decision-making with a dynamic dashboard showcasing real-time data & analytics for bookings, revenue and more",
    },
    {
      img: img1,
      title: "Availability Calendar",
      desc: "Stay organised with a real-time, integrated calendar with all the data to stay organised",
    },
    {
      img: img1,
      title: "Inquiries",
      desc: "Streamline inquiries with creation, qualification, tracking, and effective duplication management",
    },
    {
      img: img1,
      title: "Bookings",
      desc: "Effortlessly handle bookings, alerts, modifications, and cancellations for optimal efficiency",
    },
    {
      img: img1,
      title: "Reports & Analytics",
      desc: "Understand your business better with detailed reports and useful analytics based on historical data",
    },
    {
      img: img1,
      title: "Alerts, Notification & Reminders",
      desc: "Stay in the loop with instant updates through emails, text messages, and system alerts",
    },
    {
      img: img1,
      title: "Customer Management",
      desc: "Create outstanding guest experiences with detailed customer profiles and booking history",
    },

    {
      img: img1,
      title: "Venue Onboarding",
      desc: "Easily set up your venue with a straightforward onboarding process",
    },
    {
      img: img1,
      title: "Lead Management",
      desc: "Maximize sales potential with seamless lead capturing, qualification, and nurturing.",
    },
  ];
  return (
    <div className="margin-top-minus88">
      <section className="bg-purple-img">
        <div className="homepage-section1-wrapper">
          <h1 className="text-center text-white mb-4">
            Capture Leads. <br className="d-block d-md-none" />
            Boost Sales. <br />
            Maximize Revenue.
          </h1>
          <p className="text-white text-center mb-4">
            World’s 1st dedicated venue management software to engage leads
            better and <br className="d-none d-md-block" />
            manage bookings effortlessly
          </p>
          <div className="btns-wrapper">
            <button className="btn btn-secondary border-rad-45 custom-btn me-3 fw-bold">
              Get Started
            </button>
            <button className="btn btn-light text-dark-blue border-rad-45 custom-btn fw-bold d-flex align-items-center justify-content-center">
              <PlayerIcon />
              <div className="ms-1">Schedule Demo</div>
            </button>
          </div>
          <div className="homesection-bottom-utils-wrapper text-white">
            <div className="d-flex">
              <div className="d-flex me-4">
                <NoCardIcon />
                <div className="ms-2 whitespace-nowrap">No card required</div>
              </div>
              <div className="d-flex me-4">
                <HeadphoneSolidIcon />
                <div className="ms-2 whitespace-nowrap">
                  Dedicated venue experts
                </div>
              </div>
            </div>

            <div className="d-flex me-4">
              <SandClockIcon />
              <div className="ms-2">Quick set-up</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection of Sales Section Start */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-dark-blue mb-3">
            A collection of sales tools designed <br /> with revenue growth in
            mind
          </h2>
          <div className="section-subtitle">
            End-To-End, Powerful Suite of Features for efficient leads and
            bookings management
          </div>
          <div className="row mt-5">
            {salesList.map((data, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="collection-sales-card">
                  <img src={data.img} className="mb-3" alt="" />
                  <h5>{data.title}</h5>
                  <p>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Collection of Sales Section End */}

      {/* View Plans Section Start */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2 className="section-title text-center text-md-start">
                Lorem Ipsum dolor sit amet
              </h2>
            </div>
            <div className="col-md-6">
              <div className="section-subtitle text-center text-md-end">
                We are a team of 20+ who are passionate about <br />
                making the world a better place.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="view-plan-bg-img">
                <div>
                  <div className="text-white">
                    Dive into our blog posts for useful tips and inspiration
                  </div>
                  <h3 className="text-white">Read our blogs</h3>
                </div>
                <div>
                  <button className="btn btn-primary view-plan-btn">
                    <div className="me-3">View Details</div> <TopRightArrowIconWhite />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="homepage-plan-card bg-beige mb-4">
                    <div className="mb-5">
                      Find the best plan for your{" "}
                      <br className="d-none d-md-block" /> venue management
                    </div>
                    <div className="view-plan-wrapper">
                      <h6>View our Plans </h6>
                      <TopRightArrowIcon />
                    </div>
                  </div>

                  <div className="homepage-plan-card bg-light-blue">
                    <div className="mb-5">
                      Get personalized advice by{" "}
                      <br className="d-none d-md-block" /> our venue experts for
                      tailored <br className="d-none d-md-block" /> insights
                    </div>
                    <div className="view-plan-wrapper">
                      <h6>Talk to our Sales </h6>
                      <TopRightArrowIcon />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="homepage-plan-card bg-purple h-100">
                    <div className="mb-5">
                      See innovation in action —{" "}
                      <br className="d-none d-md-block" /> book your own
                      software <br className="d-none d-md-block" /> demo today
                    </div>
                    <div className="view-plan-wrapper">
                      <h6>Book a Demo</h6>
                      <TopRightArrowIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* View Plans Section End */}
    </div>
  );
};

export default Homepage;
