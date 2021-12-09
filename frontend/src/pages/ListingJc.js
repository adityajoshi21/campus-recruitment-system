import React from "react";

export const ListingJc = (props) => {
  return (
    <div>
     
        <div className="job-list">
          <div className="thumb">
            <a href="#">
              <img src={props.img} className="img-fluid" alt="" />
            </a>
          </div>
          <div className="body">
            <div className="content">
              <h4>
                <a href="job-details.html">{props.jobTitle}</a>
              </h4>
              <div className="info">
                <span className="company">
                  <a href="#">
                    <i data-feather="briefcase"></i>
                    {props.company}
                  </a>
                </span>
                <span className="office-location">
                  <a href="#">
                    <i data-feather="map-pin"></i>
                    {props.city}
                  </a>
                </span>
                <span className="job-type temporary">
                  <a href="#">
                    <i data-feather="clock"></i>
                    {props.type}
                  </a>
                </span>
              </div>
            </div>
            <div className="more">
              <div className="buttons">
                <a
                  href="#"
                  className="button"
                  data-toggle="modal"
                  data-target="#apply-popup-id"
                >
                  Apply Now
                </a>
                <a href="#" className="favourite">
                  <i data-feather="heart"></i>
                </a>
              </div>
              <p className="deadline">{props.deadline}</p>
            </div>
          </div>
        </div>
        <div className="apply-popup">
          <div
            className="modal fade"
            id="apply-popup-id"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i data-feather="edit"></i>APPLY FOR THIS JOB
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group file-input-wrap">
                      <label for="up-cv">
                        <input id="up-cv" type="file" />
                        <i data-feather="upload-cloud"></i>
                        <span>
                          Upload your resume <span>(pdf,zip,doc,docx)</span>
                        </span>
                      </label>
                    </div>
                    <div className="more-option">
                      <input
                        className="custom-radio"
                        type="checkbox"
                        id="radio-4"
                        name="termsandcondition"
                      />
                      <label for="radio-4">
                        <span className="dot"></span> I accept the{" "}
                        <a href="#">terms & conditions</a>
                      </label>
                    </div>
                    <button className="button primary-bg btn-block">
                      Apply Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};
