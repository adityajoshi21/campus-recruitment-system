import React from 'react'

export const CompanyOpenJobs = (props) => {
    return (
        <div>
             <div className="job-list">
                        <div className="body">
                          <div className="content">
                            <h4><a href="job-details.html">{props.JobDetail} </a></h4>
                            <div className="info">
                              <span className="office-location"><a href="#"><i data-feather="map-pin"></i>{props.location}</a></span>
                              <span className="job-type temporary"><a href="#"><i data-feather="clock"></i>{props.type}</a></span>
                            </div>
                          </div>
                          <div className="more">
                            <div className="buttons">
                              <a href="#" className="button">Apply Now</a>
                              <a href="#" className="favourite"><i data-feather="heart"></i></a>
                            </div>
                            <p className="deadline">{props.deadline}</p>
                          </div>
                        </div>
                      </div>
        </div>
    )
}
