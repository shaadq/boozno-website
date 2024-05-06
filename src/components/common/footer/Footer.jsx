import React from "react";
import "./Footer.scss";
import { FacebookIcon, InstagramIcon, LinkedinIcon, Logo, MailIcon, PhoneIcon, TwitterIcon } from "../../../assets/img/svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo-wrapper mb-4">
                <Logo />
              </div>
              <div className="text-light mb-3">
                Boozno is your all-in-one solution for <br />
                venue management and experience unparalleled convenience.
              </div>
              <div className="footer-socialmedia-items mb-4">
                <div className="item">
                  <FacebookIcon />
                </div>
                <div className="item">
                  <TwitterIcon />
                </div>
                <div className="item">
                  <InstagramIcon />
                </div>
                <div className="item">
                  <LinkedinIcon />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="text-white footer-link-title">Usefull Links</div>
                <div className="col-6">
                  <div className="footer-links text-light">
                    <Link to={"/"}>
                      <div className="item">Home</div>
                    </Link>
                    <Link to={"/solution"}>
                      <div className="item">Solutions</div>
                    </Link>
                    <Link to={"/pricing"}>
                      <div className="item">Pricing Plan</div>
                    </Link>
                    <Link to={"/aboutus"}>
                      <div className="item">About Us</div>
                    </Link>
                    <Link to={"/"}>
                      <div className="item">Career</div>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="footer-links text-light">
                    <div className="item">Blogs</div>
                    <div className="item">Talk to Sales</div>
                    <div className="item">Schedule Demo</div>
                    <div className="item">Contact Us</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="row">
                <div className="col-6">
                  <div className="text-white footer-link-title">Legal</div>
                  <div className="footer-links text-light">
                    <Link to={"/legal/termsconditons"}>
                      <div className="item">Terms of Services</div>
                    </Link>
                    <Link to={"/legal/privacypolicy"}>
                      <div className="item">Privacy Policy</div>
                    </Link>
                    <Link to={"/faqs/product"}>
                      <div className="item">FAQ's</div>
                    </Link>
                    <Link to={"/legal/cookiespolicy"}>
                      <div className="item">Cookie Policy</div>
                    </Link>
                    <Link to={"/legal/mpi"}>
                      <div className="item whitespace-nowrap">Do Not Sell My Personal Info</div>
                    </Link>
                    <Link to={"/legal/gdpr"}>
                      <div className="item whitespace-nowrap">GDPR Compliance</div>
                    </Link>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-white footer-link-title">Support</div>
                  <div className="footer-links text-light">
                    <div className="d-flex align-items-center item">
                      <MailIcon />
                      <div className="ms-2">help@boozno.com</div>
                    </div>
                    <div className="d-flex align-items-center item">
                      <PhoneIcon />
                      <div className="ms-2">+91 12345 54321</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Newsletter */}
            {/* <div className="col-md-4">
              <div>
                <div className="text-white mb-3 fs-18">Subscribe to our weekly email newsletter</div>
                <div className="footer-subscribe-wrapper">
                  <input type="text" placeholder="Add your email address" />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-dark-blue py-3 text-white text-center">© 2023 Boozno Technologies Pvt. Ltd. All rights reserved. </div>
    </footer>
  );
};

export default Footer;
