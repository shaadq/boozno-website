import React from "react";
import img from "../../../../assets/img/tab-img-1.png";
import { GreenCheckIcon } from "../../../../assets/img/svg";

const TabContent = ({ content }) => {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const pointsChunks = chunkArray(content.points, 3);
  console.log(pointsChunks);
  return (
    <div className="custom-tab-content-container">
      <h4 className="text-dark-blue">{content.title}</h4>
      <p className="tab-content">{content.content}</p>
      <div className="row mt-4">
        <div className="col-md-4 d-flex align-items-center">
          <div className="tab-list d-block d-md-none mb-4">
            <div className="row">
              {pointsChunks.map((item, index) => (
                <div className="col-6 pe-0" key={index}>
                  {item.map((i, ind) => (
                    <div
                      key={ind}
                      className=" d-flex align-items-center justify-content-start mb-3 text-darkgrey "
                    >
                      <GreenCheckIcon />
                      <div className="tab-item-list-text ms-1">{i}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="tab-list d-none d-md-block">
            {content.points.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center mb-3 text-darkgrey "
              >
                <GreenCheckIcon />
                <div className="ms-1">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <img src={content.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TabContent;
