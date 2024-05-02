import React from "react";
import "./Pricing.scss";
import FAQ from "../../common/faq/FAQ";
import RightAnswer from "../../common/right-answer/RightAnswer";
import ReadyToTry from "../../common/ready-to-try/ReadyToTry";

const PricingPage = () => {
  return (
    <div>
      <ReadyToTry />
      <FAQ />
      <RightAnswer />
    </div>
  );
};

export default PricingPage;
