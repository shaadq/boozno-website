import React from "react";
import "./RightAnswer.scss";
import { Link } from "react-router-dom";

const RightAnswer = () => {
  return (
    <section className="pb-5">
      <div className="container">
        <div className="bg-purple right-answer-wrapper">
          <div className="row">
            <div className="col-md-6 text-start mb-4 mb-md-0">
              <h3 className="text-white">Can't find the right answer?</h3>
              <p className="text-white mb-0">Our support team will be happy to help you</p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-start justify-content-md-end">
              <Link to={"/contactus"}>
                <button className="btn btn-light px-4 py-2 border-rad-45 fw-sembold text-purple">Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightAnswer;
