import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ankit from "../../../assets/img/ankit.png";
import better from "../../../assets/img/better.png";
import saveIcon from "../../../assets/img/celebration.png";
import img1 from "../../../assets/img/sales-1.png";
import img2 from "../../../assets/img/sales-2.png";
import img3 from "../../../assets/img/sales-3.png";
import img4 from "../../../assets/img/sales-4.png";
import img5 from "../../../assets/img/sales-5.png";
import img6 from "../../../assets/img/sales-6.png";
import img7 from "../../../assets/img/sales-7.png";
import img8 from "../../../assets/img/sales-8.png";
import img9 from "../../../assets/img/sales-9.png";
import {
  GalaxyImg,
  GalaxyImgMobile,
  HeadphoneSolidIcon,
  NoCardIcon,
  PlayerIcon,
  QuotesIcon,
  SandClockIcon,
  TopRightArrowIcon,
  TopRightArrowIconWhite,
  YellowCheckIcon,
} from "../../../assets/img/svg";
import taj from "../../../assets/img/taj-img.png";
import venueManageImgMobile from "../../../assets/img/venue-manage-img-mobile.png";
import venueManageImg from "../../../assets/img/venue-manage-img.png";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import "./Homepage.scss";

const Homepage = () => {
  let salesList = [
    {
      img: img1,
      title: "Dashboard",
      desc: "Empower decision-making with a dynamic dashboard showcasing real-time data & analytics for bookings, revenue and more",
    },
    {
      img: img2,
      title: "Availability Calendar",
      desc: "Stay organised with a real-time, integrated calendar with all the data to stay organised",
    },
    {
      img: img3,
      title: "Inquiries",
      desc: "Streamline inquiries with creation, qualification, tracking, and effective duplication management",
    },
    {
      img: img4,
      title: "Bookings",
      desc: "Effortlessly handle bookings, alerts, modifications, and cancellations for optimal efficiency",
    },
    {
      img: img5,
      title: "Reports & Analytics",
      desc: "Understand your business better with detailed reports and useful analytics based on historical data",
    },
    {
      img: img6,
      title: "Alerts, Notification & Reminders",
      desc: "Stay in the loop with instant updates through emails, text messages, and system alerts",
    },
    {
      img: img7,
      title: "Customer Management",
      desc: "Create outstanding guest experiences with detailed customer profiles and booking history",
    },

    {
      img: img8,
      title: "Venue Onboarding",
      desc: "Easily set up your venue with a straightforward onboarding process",
    },
    {
      img: img9,
      title: "Lead Management",
      desc: "Maximize sales potential with seamless lead capturing, qualification, and nurturing.",
    },
  ];

  let testimonials = [
    {
      text: "Excellent app, has transformed how I manage pickups, deliveries, and shipping. Highly recommend. Many thanks to Savin & Annie, who helped set up the app and ensured everything was running smoothly. Great tech support, which is greatly appreciated.",
      name: "John Robert",
      event: "Hibiscus CoastParty Hire",
      img: taj,
    },
    {
      text: "Excellent app, has transformed how I manage pickups, deliveries, and shipping. Highly recommend. Many thanks to Savin & Annie, who helped set up the app and ensured everything was running smoothly. Great tech support, which is greatly appreciated.",
      name: "John Robert",
      event: "Hibiscus CoastParty Hire",
      img: taj,
    },
    {
      text: "Excellent app, has transformed how I manage pickups, deliveries, and shipping. Highly recommend. Many thanks to Savin & Annie, who helped set up the app and ensured everything was running smoothly. Great tech support, which is greatly appreciated.",
      name: "John Robert",
      event: "Hibiscus CoastParty Hire",
      img: taj,
    },
  ];

  let betterList = [
    { text: "Replaces all your current SaaS solutions" },
    { text: "Comprehensive Software Solution" },
    { text: "Intuitive User Interface" },
    { text: "Real-time Analytics and Reporting" },
    { text: "Customization and Scalability" },
    { text: "Transparent Pricing, No Hidden Fees" },
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // Chunk the salesList into groups of three
  const salesChunks = chunkArray(salesList, 3);

  return (
    <div>
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
            <button className="btn btn-secondary border-rad-45 custom-btn me-3 fw-semibold">
              Get Started
            </button>
            <button className="btn btn-light text-dark-blue border-rad-45 custom-btn d-flex align-items-center justify-content-center">
              <PlayerIcon />
              <div className="ms-1 fw-semibold">Schedule Demo</div>
            </button>
          </div>
          <div className="homesection-bottom-utils-wrapper text-white">
            <div className="d-flex">
              <div className="d-flex me-4">
                <NoCardIcon />
                <div className="ms-2 whitespace-nowrap">No card required</div>
              </div>
              <div className="d-flex me-0 me-md-4">
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

      {/* Better Section Start */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 d-flex align-items-center">
              <div>
                <h2 className="section-title text-lg-start text-dark-blue mb-5">
                  What makes The Boozno <br className="d-none d-lg-block" />{" "}
                  Better than others?
                </h2>
                <div className="better-list d-none d-lg-block">
                  {betterList.map((item, index) => (
                    <div className="better-list-item" key={index}>
                      <YellowCheckIcon />
                      <div className="ms-2 title fw-semibold">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img src={better} alt="" className="w-100" draggable="false" />
              </div>

              <div className="better-list d-block d-lg-none mt-4">
                {betterList.map((item, index) => (
                  <div className="better-list-item" key={index}>
                    <YellowCheckIcon />
                    <div className="ms-2 title fw-semibold">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Better Section End */}

      {/* Galaxy of Venues */}
      <section className="py-0 py-md-5">
        <div className="container">
          <h2 className="section-title center text-dark-blue">
            Galaxy of venues one Solution
          </h2>
          <div className="section-subtitle">
            Boozno boosts revenue across diverse venues with a powerful suite of
            results-driven features.
          </div>

          <span className="galaxy-img-wrapper d-block d-md-none">
            <GalaxyImgMobile />
          </span>
          <span className="galaxy-img-wrapper galaxy-img-wrapper-web d-none d-md-block">
            <GalaxyImg />
          </span>
        </div>
      </section>
      {/* Galaxy of Venues End*/}

      {/* Product Story */}
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
              <img src={ankit} className="product-story-img" alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="section-title text-lg-start text-dark-blue mb-4">
                  Product Story
                </h2>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </p>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.m is a placeholder text commonly used to
                  demonstrate the visual form of a document or a typeface
                  without relying on meaningful content.Lorem ipsum is a
                  placeholder text commonly used to demonstrate the visual form
                  of a document or a typeface without relying on meaningful
                  content.
                </p>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.m is a placeholder text commonly used to
                  demonstrate the visual form of a document or a typeface
                  without relying on meaningful content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Story End */}

      {/* Management Problems Section */}
      <section className="py-5">
        <div className="container">
          <div className="venue-managemnet-wrapper">
            <h2 className="section-title center text-white">
              Venue Management Problems,
              <br className="d-none d-md-block" /> One Solution
            </h2>
            <div className="section-subtitle text-light-white">
              An advanced lead management in CRM will{" "}
              <br className="d-block d-md-none" />
              provide you with the following benefits including
            </div>
            <div className="venue-manage-img-wrapper mt-3 mt-md-0">
              <img
                src={venueManageImgMobile}
                className="d-block d-md-none"
                alt=""
                draggable="false"
              />
              <img
                src={venueManageImg}
                alt=""
                className="d-none d-md-block"
                draggable="false"
              />
              {/* <VenueManagementProblemsImg /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Management Problems Section End*/}

      {/* Save Strip */}
      <section className="py-3 save-strip-wrapper-bg">
        <div className="container">
          <div className="save-strip-wrapper">
            <img src={saveIcon} alt="" />
            <div className="text-white">
              Save up to 20% with our annual plans.&nbsp;
              <Link className="text-white">Click here.</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Save Strip End */}

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

          <div className="d-none d-md-block">
            <div className="row mt-5 ">
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

          <div className="mt-5 d-block d-md-none">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              dots={false}
              items={1}
            >
              {salesChunks.map((chunk, index) => (
                <div className="item" key={index}>
                  <div className="row">
                    {chunk.map((data, subIndex) => (
                      <div className="col-12 mb-3" key={subIndex}>
                        <div className="collection-sales-card">
                          <img
                            src={data.img}
                            className="mb-3"
                            alt={data.title}
                          />
                          <h5>{data.title}</h5>
                          <p>{data.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </OwlCarousel>
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
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="view-plan-bg-img">
                <div className="mb-5">
                  <div className="text-white">
                    Dive into our blog posts for useful tips and inspiration
                  </div>
                  <h3 className="text-white">Read our blogs</h3>
                </div>
                <div>
                  <button className="btn btn-primary view-plan-btn">
                    <div className="me-3">View Details</div>{" "}
                    <TopRightArrowIconWhite />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="homepage-plan-card bg-beige mb-3 mb-md-3">
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
                <div className="col-md-6 ">
                  <div className="homepage-plan-card bg-purple-light h-100">
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

      {/* Testimonials Section Start */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-dark-blue mb-3">Testimonials</h2>
          <div className="section-subtitle">
            What our customers have to say about us
          </div>

          <div className="testimonials-container d-none d-lg-block mt-4 position-relative">
            <div className="gradient-bg-left"></div>
            <div className="mb-4">
              <Swiper
                loop={true}
                // peek={{ before: 100, after: 100 }}
                slidesPerView={1.5} // This allows half of the previous and next slides to show
                centeredSlides={true} // Centers the current slide
                // slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <Swiper
                loop={true}
                // peek={{ before: 100, after: 100 }}
                slidesPerView={1.5} // This allows half of the previous and next slides to show
                centeredSlides={true} // Centers the current slide
                // slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">
                        "Excellent app, has transformed how I manage pickups,
                        deliveries, and shipping. Highly recommend. Many thanks
                        to Savin & Annie, who helped set up the app and ensured
                        everything was running smoothly. Great tech support,
                        which is greatly appreciated."
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">John Robert</h6>
                        <p className="mb-0">Hibiscus CoastParty Hire</p>
                      </div>
                      <div>
                        <img src={taj} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="gradient-bg-right"></div>
          </div>

          <div className="d-block d-lg-none">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              dots={false}
              items={1}
            >
              {testimonials.map((item, index) => (
                <div className="item" key={index}>
                  <div className="testimonials-card">
                    <div>
                      <div className="mb-1">
                        <QuotesIcon />
                      </div>
                      <div className="testimonial-text">"{item.text}"</div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-0">{item.event}</p>
                      </div>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* Testimonials Section End */}

      {/* FAQ Section Start */}
      <FAQ />
      <RightAnswer />
      {/* FAQ Section End */}
    </div>
  );
};

export default Homepage;
