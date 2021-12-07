import React from "react";

const RecentCompanies = (props) => {
  return (
    <div>
         
                <div className="company-wrap">
                  <div className="thumb">
                    <a href="#">
                      <img
                        src={props.image}
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="body">
                    <h4>
                      <a >{props.companyName}</a>
                    </h4>
                    <span>{props.location}</span>
                    <a  className="button">
                      {props.position}
                    </a>
                  </div>
                </div>
              </div>
           
    
  );
};
export default RecentCompanies;