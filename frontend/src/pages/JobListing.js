import React from 'react'
import StudentNav from './StudentNav';

const JobListing = () => {
    return (
        <div>
       <StudentNav/>  

    
    <div className="alice-bg padding-top-70 padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="breadcrumb-area">
              <h1>Job Listing</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Job Listing</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-md-6">
            <div className="breadcrumb-form">
              <form action="#">
                <input type="text" placeholder="Search"/>
                <button><i data-feather="search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <div className="alice-bg section-padding-bottom">
      <div className="container">
        <div className="row no-gutters">
          <div className="col">
            <div className="job-listing-container">
              <div className="filtered-job-listing-wrapper">
                <div className="job-view-controller-wrapper">
                  <div className="job-view-controller">
                    <div className="controller list active">
                      <i data-feather="menu"></i>
                    </div>
                    <div className="controller grid">
                      <i data-feather="grid"></i>
                    </div>
                    <div className="job-view-filter">
                      <select className="selectpicker">
                        <option value="" selected>Most Recent</option>
                        <option value="california">Top Rated</option>
                        <option value="las-vegas">Most Popular</option>
                      </select>
                    </div>
                  </div>
                  <div className="showing-number">
                    <span>Showing 1–12 of 28 Jobs</span>
                  </div>
                </div>
                <div className="job-filter-result">
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-8.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Restaurant Team Member - Crew </a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                          <span className="job-type temporary"><a href="#"><i data-feather="clock"></i>Temporary</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div> 
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-9.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Nutrition Advisor</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                          <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-10.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">UI Designer</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Degoin</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>San Francisco</a></span>
                          <span className="job-type part-time"><a href="#"><i data-feather="clock"></i>Part Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-3.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Land Development Marketer</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Realouse</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>Washington</a></span>
                          <span className="job-type freelance"><a href="#"><i data-feather="clock"></i>Freelance</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-10.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">UI Designer</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Degoin</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>San Francisco</a></span>
                          <span className="job-type part-time"><a href="#"><i data-feather="clock"></i>Part Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-3.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Land Development Marketer</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Realouse</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>Washington</a></span>
                          <span className="job-type freelance"><a href="#"><i data-feather="clock"></i>Freelance</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-1.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Designer Required</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                          <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-2.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Project Manager</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Degoin</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>San Francisco</a></span>
                          <span className="job-type part-time"><a href="#"><i data-feather="clock"></i>Part Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-8.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Restaurant Team Member - Crew </a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Geologitic</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>Las Vegas</a></span>
                          <span className="job-type temporary"><a href="#"><i data-feather="clock"></i>Temporary</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-9.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Nutrition Advisor</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                          <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-1.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Designer Required</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                          <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="job-list">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/job/company-logo-2.png" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="job-details.html">Project Manager</a></h4>
                        <div className="info">
                          <span className="company"><a href="#"><i data-feather="briefcase"></i>Degoin</a></span>
                          <span className="office-location"><a href="#"><i data-feather="map-pin"></i>San Francisco</a></span>
                          <span className="job-type part-time"><a href="#"><i data-feather="clock"></i>Part Time</a></span>
                        </div>
                      </div>
                      <div className="more">
                        <div className="buttons">
                          <a href="#" className="button" data-toggle="modal" data-target="#apply-popup-id">Apply Now</a>
                          <a href="#" className="favourite"><i data-feather="heart"></i></a>
                        </div>
                        <p className="deadline">Deadline: Oct 31,  2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="apply-popup">
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
                                <input type="text" placeholder="Full Name" className="form-control"/>
                              </div>
                              <div className="form-group">
                                <input type="email" placeholder="Email Address" className="form-control"/>
                              </div>
                              <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                              </div>
                              <div className="form-group file-input-wrap">
                                <label for="up-cv">
                                  <input id="up-cv" type="file"/>
                                  <i data-feather="upload-cloud"></i>
                                  <span>Upload your resume <span>(pdf,zip,doc,docx)</span></span>
                                </label>
                              </div>
                              <div className="more-option">
                                <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition"/>
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
                  </div>
                </div>
                <div className="pagination-list text-center">
                  <nav className="navigation pagination">
                    <div className="nav-links">
                      <a className="prev page-numbers" href="#"><i className="fas fa-angle-left"></i></a>
                      <a className="page-numbers" href="#">1</a>
                      <span aria-current="page" className="page-numbers current">2</span>
                      <a className="page-numbers" href="#">3</a>
                      <a className="page-numbers" href="#">4</a>
                      <a className="next page-numbers" href="#"><i className="fas fa-angle-right"></i></a>
                    </div>
                  </nav>                
                </div>
              </div>
              <div className="job-filter-wrapper">
                <div className="selected-options same-pad">
                  <div className="selection-title">
                    <h4>You Selected</h4>
                    <a href="#">Clear All</a>
                  </div>
                  <ul className="filtered-options">
                  </ul>
                </div>
                <div className="job-filter-dropdown same-pad category">
                  <select className="selectpicker">
                    <option value="" selected>Category</option>
                    <option value="california">Accounting / Finance</option>
                    <option value="california">Education</option>
                    <option value="california">Design &amp; Creative</option>
                    <option value="california">Health Care</option>
                    <option value="california">Engineer &amp; Architects</option>
                    <option value="california">Marketing &amp; Sales</option>
                    <option value="california">Garments / Textile</option>
                    <option value="california">Customer Support</option>
                    <option value="california">Digital Media</option>
                    <option value="california">Telecommunication</option>
                  </select>
                </div>
                <div className="job-filter-dropdown same-pad location">
                  <select className="selectpicker">
                    <option value="" selected>Location</option>
                    <option value="california">Chicago</option>
                    <option value="california">New York City</option>
                    <option value="california">San Francisco</option>
                    <option value="california">Washington</option>
                    <option value="california">Boston</option>
                    <option value="california">Los Angeles</option>
                    <option value="california">Seattle</option>
                    <option value="california">Las Vegas</option>
                    <option value="california">San Diego</option>
                  </select>
                </div>
                <div data-id="job-type" className="job-filter job-type same-pad">
                  <h4 className="option-title">Job Type</h4>
                  <ul>
                    <li className="full-time"><i data-feather="clock"></i><a href="#" data-attr="Full Time">Full Time</a></li>
                    <li className="part-time"><i data-feather="clock"></i><a href="#" data-attr="Part Time">Internship</a></li>
                  </ul>
                </div>
                <div data-id="experience" className="job-filter experience same-pad">
                  <h4 className="option-title">Experience</h4>
                  <ul>
                    <li><a href="#" data-attr="Fresh">Fresh</a></li>
                    <li><a href="#" data-attr="Less than 1 year">Less than 1 year</a></li>
                    <li><a href="#" data-attr="2 Year">2 Year</a></li>
                    <li><a href="#" data-attr="3 Year">3 Year</a></li>
                  </ul>
                </div>
                <div className="job-filter same-pad">
                  <h4 className="option-title">Salary Range</h4>
                  <div className="price-range-slider">
                    <div className="nstSlider" data-range_min="0" data-range_max="10000" 
                     data-cur_min="0"    data-cur_max="6130">
                      <div className="bar"></div>
                      <div className="leftGrip"></div>
                      <div className="rightGrip"></div>
                      <div className="grip-label">
                        <span className="leftLabel"></span>
                        <span className="rightLabel"></span>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div data-id="gender" className="job-filter same-pad gender">
                  <h4 className="option-title">Gender</h4>
                  <ul>
                    <li><a href="#" data-attr="Male">Male</a></li>
                    <li><a href="#" data-attr="Female">Female</a></li>
                  </ul>
                </div>
                <div data-id="qualification" className="job-filter qualification same-pad">
                  <h4 className="option-title">Qualification</h4>
                  <ul>
                    <li><a href="#" data-attr="Gradute">Graduate</a></li>
                    <li><a href="#" data-attr="PostGradute">Post Graduate</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   
        </div>
    )
}
export default JobListing;