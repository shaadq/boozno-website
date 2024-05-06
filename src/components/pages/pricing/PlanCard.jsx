import React, { useState } from "react";
import { CheckIconPurple, GreyCheckIconStyle } from "../../../assets/img/svg";

const PlanCard = ({ featureList, data, isChecked }) => {
  const [allFeatures, setAllFeatures] = useState(true);
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Function to increase the count with a maximum limit
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <div className="w-100">
      {/* Mobile CARD */}
      <div className={`plan-card ${data.main ? "border-purple" : "w-100 scale-95"} d-block d-lg-none`}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">{data.title}</h5>
          <div>{data.venues} Venues</div>
        </div>
        <div className="d-flex align-items-end justify-content-start text-purple mb-4">
          {data.main ? (
            <>
              <div className="fw-semibold title">₹{isChecked ? data.price : data.price / 12} </div>
              <div className="mb-2">/User</div>
            </>
          ) : (
            <div className="title"> Coming Soon</div>
          )}
        </div>
        <div className="card-list mb-4">
          {allFeatures ? (
            <>
              {featureList.slice(0, 5).map((d, index) => (
                <div className="d-flex align-items-center mb-3" key={index}>
                  {data.main ? <CheckIconPurple /> : <GreyCheckIconStyle />}
                  <div className={`ms-2 ${data.main ? "card-list-text" : "card-list-text2"} `}>{d}</div>
                </div>
              ))}
            </>
          ) : (
            <>
              {featureList.map((d, index) => (
                <div className="d-flex align-items-center mb-3" key={index}>
                  {data.main ? <CheckIconPurple /> : <GreyCheckIconStyle />}
                  <div className={`ms-2 ${data.main ? "card-list-text" : "card-list-text2"} `}>{d}</div>
                </div>
              ))}
            </>
          )}

          <div className="text-grey-2 text-decoration-underline cursor-pointer" onClick={() => setAllFeatures(!allFeatures)}>
            See {allFeatures ? "all" : "less"} plan features
          </div>
        </div>
        {data.main ? (
          <div className="no-of-users-wrapper mb-4">
            <h6 className="mb-0">No. of Users</h6>
            <div className="counter-wrapper">
              <div className={`icon-wrapper no-select fw-bold br ${count === 1 ? "text-light-grey" : "text-dark-blue"}`} onClick={decrement}>
                -
              </div>
              <div className="px-2 fw-semibold">{count}</div>
              <div className={`icon-wrapper no-select fw-bold bl ${count === 10 ? "text-light-grey" : "text-dark-blue"}`} onClick={increment}>
                +
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <button className={`btn ${data.main ? "btn-primary" : "btn-outline-primary"}  border-rad-45 w-100 py-3`}>{data.main ? "Continue" : "Coming Soon"}</button>
      </div>

      {/* Laptop CARD */}
      <div className={`plan-card ${data.main ? "border-purple" : "w-100 scale-95"} d-none d-lg-block`}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="mb-0">{data.title}</h5>
          <div>{data.venues} Venues</div>
        </div>
        <div className="d-flex align-items-end justify-content-start text-purple mb-4">
          {data.main ? (
            <>
              <div className="fw-semibold title">₹{isChecked ? data.price : data.price / 12} </div>
              <div className="mb-2">/User</div>
            </>
          ) : (
            <div className="title"> Coming Soon</div>
          )}
        </div>
        <div className="card-list mb-4">
          {featureList.map((data, index) => (
            <div className="d-flex align-items-center mb-3" key={index}>
              <CheckIconPurple />
              <div className="ms-2 card-list-text">{data}</div>
            </div>
          ))}
        </div>
        {data.main ? (
          <div className="no-of-users-wrapper mb-4">
            <h6 className="mb-0">No. of Users</h6>
            <div className="counter-wrapper">
              <div className={`icon-wrapper no-select fw-bold br ${count === 1 ? "text-light-grey cursor-nodrop" : "text-dark-blue"}`} onClick={decrement}>
                -
              </div>
              <div className="px-2 fw-semibold">{count}</div>
              <div className={`icon-wrapper no-select fw-bold bl ${count === 10 ? "text-light-grey cursor-nodrop" : "text-dark-blue"}`} onClick={increment}>
                +
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <button className={`btn ${data.main ? "btn-primary" : "btn-outline-primary"}  border-rad-45 w-100 py-3`}>{data.main ? "Continue" : "Coming Soon"}</button>
      </div>
    </div>
  );
};

export default PlanCard;
