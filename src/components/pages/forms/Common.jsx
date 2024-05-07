import React from "react";
import img1 from "../../../assets/img/lifetime-img.svg";
import img2 from "../../../assets/img/quick-img.svg";
import img3 from "../../../assets/img/features-img.svg";

const Common = () => {
  return (
    <div className="col-lg-4 ps-5 pt-5 d-none d-lg-block">
      <div className="row justify-content-between h-100">
        <div className="col-12">
          <div>
            <img className="mb-3" src={img1} alt="" />
            <h6 className="text-dark-blue">Life time access</h6>
            <p className="text-grey-2">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum</p>
          </div>
        </div>
        <div className="col-12">
          <div>
            <img className="mb-3" src={img2} alt="" />
            <h6 className="text-dark-blue">Quick Setup</h6>
            <p className="text-grey-2">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum</p>
          </div>
        </div>
        <div className="col-12">
          <div>
            <img className="mb-3" src={img3} alt="" />
            <h6 className="text-dark-blue">Lots of free features</h6>
            <p className="text-grey-2">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
