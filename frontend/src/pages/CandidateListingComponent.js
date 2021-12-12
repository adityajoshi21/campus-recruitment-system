import React from "react";

const CandidateListingComponent = (props) => {
  return (
    <div>
      <div className="candidate-filter-result">
        <div className="candidate">
          <div className="thumb">
            <a href="#">
              <img src={props.img} className="img-fluid" alt="" />
            </a>
          </div>
          <div className="body">
            <div className="content">
              <h4>
                <a href="candidate-details.html">{props.name}</a>
              </h4>
              <div className="info">
                <span className="work-post">
                  <a href="#">
                    <i data-feather="check-square"></i>
                    {props.position}
                  </a>
                </span>
                <span className="location">
                  <a href="#">
                    <i data-feather="map-pin"></i>
                    {props.city}
                  </a>
                </span>
              </div>
            </div>
            <div className="button-area">
              <a href="#">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateListingComponent;
