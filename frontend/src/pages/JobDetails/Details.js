import React from 'react';

const Details = (props) => {
    return (
        <><div className="alice-bg padding-top-60 section-padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="job-listing-details">
                            <div className="job-title-and-info">
                                <div className="title">
                                    <div className="thumb">
                                        <img src="{props.image}" className="img-fluid" alt="" />
                                    </div>
                                    <div className="title-body">
                                        <h4>{props.JobTitle}</h4>
                                        <div className="info">
                                            <span className="company"><a href="#"><i data-feather="briefcase"></i>{props.company}</a></span>
                                            <span className="office-location"><a href="#"><i data-feather="map-pin"></i>{props.location}</a></span>
                                            <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>{props.JobType}</a></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <a className="save" href="#"><i data-feather="heart"></i>Save Job</a>
                                    <a className="apply" href="#" data-toggle="modal" data-target="#apply-popup-id">Apply Online</a>
                                </div>
                            </div>
                            <div className="details-information section-padding-60">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-8">
                                        <div className="description details-section">
                                            <h4><i data-feather="align-left"></i>Job Description</h4>
                                            <p>{props.Des1}</p>
                                            <p>{props.Des2} </p>
                                        </div>
                                        <div className="responsibilities details-section">
                                            <h4><i data-feather="zap"></i>Responsibilities</h4>
                                            <ul>
                                                <li>{props.res1}</li>
                                                <li>{props.res2}</li>
                                                <li>{props.res3}</li>
                                                <li>{props.res4}</li>
                                                <li>{props.res5}</li>
                                                <li>{props.res6}</li>
                                            </ul>
                                        </div>
                                        <div className="edication-and-experience details-section">
                                            <h4><i data-feather="book"></i>Education + Experience</h4>
                                            <ul>
                                                <li>M.Com (Accounting) / M.B.S / M.B.A under National University with CA course complete.</li>
                                                <li>M.S (Statistics) any Public University / National University.</li>
                                                <li>Masters of library science any Public University.</li>
                                                <li>2 to 3 year(s) Experiance</li>
                                                <li>Females candidate are discourage to apply.</li>
                                            </ul>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-7 col-lg-8">
                                                <div className="company-information details-section">
                                                    <h4><i data-feather="briefcase"></i>About the Company</h4>
                                                    <ul>
                                                        <li><span>Company Name:</span> The Oreo Company Ltd.</li>
                                                        <li><span>Address:</span> Queens, NY 11375 USA</li>
                                                        <li><span>Website:</span> <a href="#">www.theoreoltd.com</a></li>
                                                        <li><span>Company Profile:</span></li>
                                                        <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum looked up one of the more obscure Latin words, consectetur.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="job-apply-buttons">
                                            <a href="#" className="apply" data-toggle="modal" data-target="#apply-popup-id">Apply Online</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 offset-xl-1 col-lg-4">
                                        <div className="information-and-share">
                                            <div className="job-summary">
                                                <h4>Job Summary</h4>
                                                <ul>
                                                    <li><span>Published on:</span> Oct 6,  2020</li>
                                                    <li><span>Vacancy:</span> 08</li>
                                                    <li><span>Employment Status:</span> Full-time</li>
                                                    <li><span>Experience:</span> 2 to 3 year(s)</li>
                                                    <li><span>Job Location:</span> New ork City</li>
                                                    <li><span>Salary:</span> $32k - $36k</li>
                                                    <li><span>Gender:</span> Any</li>
                                                    <li><span>Application Deadline:</span> Oct 15,  2020</li>
                                                </ul>
                                            </div>

                                            <div className="other-benifit details-section">
                                                <h4><i data-feather="gift"></i>Other Benefits</h4>
                                                <ul>
                                                    <li>Health and life insurance </li>
                                                    <li>2 days of weekend </li>
                                                    <li>2 annual performanc Bonuses</li>
                                                    <li>Lunch &amp; Snacks</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div><div className="apply-popup">
                <div className="modal fade" id="apply-popup-id" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><i data-feather="edit"></i>APPLY FOR THIS JOB</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group file-input-wrap">
                                        <label for="up-cv">
                                            <input id="up-cv" type="file" />
                                            <i data-feather="upload-cloud"></i>
                                            <span>Upload your resume <span>(pdf,zip,doc,docx)</span></span>
                                        </label>
                                    </div>
                                    <div className="more-option">
                                        <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition" />
                                        <label for="radio-4">
                                            <span className="dot"></span> I accept the <a href="#">terms & conditions</a>
                                        </label>
                                    </div>
                                    <button className="button primary-bg btn-block">Apply Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Details;