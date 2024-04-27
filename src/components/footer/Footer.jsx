import React from "react";
import "./Footer.scss";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Logo,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../../assets/img/svg";

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
                <div className="text-white footer-link-title">
                  Usefull Links
                </div>
                <div className="col-6">
                  <div className="footer-links text-light">
                    <div className="item">Home</div>
                    <div className="item">Solutions</div>
                    <div className="item">Pricing Plan</div>
                    <div className="item">About Us</div>
                    <div className="item">Career</div>
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
            <div className="col-md-4 mb-4">
              <div className="row">
                <div className="col-6">
                  <div className="text-white footer-link-title">Legal</div>
                  <div className="footer-links text-light">
                    <div className="item">Terms of Services</div>
                    <div className="item">Privacy Policy</div>
                    <div className="item">FAQ's</div>
                    <div className="item">Cookie Policy</div>
                    <div className="item">Do Not Sell My Personal Info</div>
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
            <div className="col-md-4">
              <div>
                <div className="text-white mb-3 fs-18">
                  Subscribe to our weekly email newsletter
                </div>
                <div className="footer-subscribe-wrapper">
                  <input type="text" placeholder="Add your email address" />
                  <button className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-blue py-3 text-white text-center">
        © 2023 Boozno Technologies Pvt. Ltd. All rights reserved.{" "}
      </div>
    </footer>
  );
};

export default Footer;
