/* eslint-disable */
import React from "react";

const HomePage = () => {
  return (
    <div>
      <header className="header-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-top">
              <div className="logo-area">
                <a href="index.html"><img src="images/logo-2.png" alt=""/></a>
              </div>
              <div className="header-top-toggler">
                <div className="header-top-toggler-button"></div>
              </div>
              <div className="top-nav">
                <div className="dropdown header-top-notification">
                  <a href="#" className="notification-button">Notification</a>
                  <div className="notification-card">
                    <div className="notification-head">
                      <span>Notifications</span>
                      <a href="#">Mark all as read</a>
                    </div>
                    <div className="notification-body">
                      <a href="home-2.html" className="notification-list">
                        <i className="fas fa-bolt"></i>
                        <p>Your Resume Updated!</p>
                        <span className="time">5 hours ago</span>
                      </a>
                      <a href="#" className="notification-list">
                        <i className="fas fa-arrow-circle-down"></i>
                        <p>Someone downloaded resume</p>
                        <span className="time">11 hours ago</span>
                      </a>
                      <a href="#" className="notification-list">
                        <i className="fas fa-check-square"></i>
                        <p>You applied for Project Manager <span>@homeland</span></p>
                        <span className="time">11 hours ago</span>
                      </a>
                      <a href="#" className="notification-list">
                        <i className="fas fa-user"></i>
                        <p>You changed password</p>
                        <span className="time">5 hours ago</span>
                      </a>
                      <a href="#" className="notification-list">
                        <i className="fas fa-arrow-circle-down"></i>
                        <p>Someone downloaded resume</p>
                        <span className="time">11 hours ago</span>
                      </a>
                    </div>
                    <div className="notification-footer">
                      <a href="#">See all notification</a>
                    </div>
                  </div>
                </div>
                <div className="dropdown header-top-account login-modals">
                  <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">Login</button>
                  <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong2">Registration</button>
                </div>
                <select className="selectpicker select-language" data-width="fit">
                  <option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
                  <option  data-content='<span className="flag-icon flag-icon-mx"></span> Español'>Español</option>
                </select>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg cp-nav-2">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="menu-item active"><a title="Home" href="home-1.html">Home</a></li>
                  <li className="menu-item dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Jobs</a>
                    <ul  className="dropdown-menu">
                      <li className="menu-item"><a  href="job-listing.html">Job Listing</a></li>
                      <li className="menu-item"><a  href="job-listing-with-map.html">Job Listing With Map</a></li>
                      <li className="menu-item"><a  href="job-details.html">Job Details</a></li>
                    
                    </ul>
                  </li>
                  <li className="menu-item dropdown">
                    <a title="" href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Candidates</a>
                    <ul  className="dropdown-menu">
                      <li className="menu-item"><a  href="candidate.html">Candidate Listing</a></li>
                      <li className="menu-item"><a  href="candidate-details.html">Candidate Details</a></li>
                      <li className="menu-item"><a  href="add-resume.html">Add Resume</a></li>
                    </ul>
                  </li>
                  <li className="menu-item dropdown">
                    <a title="" href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Employers</a>
                    <ul  className="dropdown-menu">
                      <li className="menu-item"><a  href="employer-listing.html">Employer Listing</a></li>
                      <li className="menu-item"><a  href="employer-details.html">Employer Details</a></li>
                      <li className="menu-item"><a  href="employer-dashboard-post-job.html">Post a Job</a></li>
                    </ul>
                  </li>
                  <li className="menu-item dropdown">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Dashboard</a>
                    <ul  className="dropdown-menu">
                      <li className="menu-item dropdown">
                        <a href="#" data-toggle="dropdown"  className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Candidate Dashboard</a>
                        <ul className="dropdown-menu">
                          <li className="menu-item"><a  href="dashboard.html">Dashboard</a></li>
                          <li className="menu-item"><a  href="dashboard-edit-profile.html">Edit Profile</a></li>
                          <li className="menu-item"><a  href="add-resume.html">Add Resume</a></li>
                          <li className="menu-item"><a  href="resume.html">Resume</a></li>
                          <li className="menu-item"><a  href="edit-resume.html">Edit Resume</a></li>
                          <li className="menu-item"><a  href="dashboard-bookmark.html">Bookmarked</a></li>
                          <li className="menu-item"><a  href="dashboard-applied.html">Applied</a></li>
                          <li className="menu-item"><a  href="dashboard-pricing.html">Pricing</a></li>
                          <li className="menu-item"><a  href="dashboard-message.html">Message</a></li>
                          <li className="menu-item"><a  href="dashboard-alert.html">Alert</a></li>
                        </ul>
                      </li>
                      <li className="menu-item dropdown">
                        <a href="#" data-toggle="dropdown"  className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Employer Dashboard</a>
                        <ul className="dropdown-menu">
                          <li className="menu-item"><a href="employer-dashboard.html">Employer Dashboard</a></li>
                          <li className="menu-item"><a href="employer-dashboard-edit-profile.html">Edit Profile</a></li>
                          <li className="menu-item"><a href="employer-dashboard-manage-candidate.html">Manage Candidate</a></li>
                          <li className="menu-item"><a href="employer-dashboard-manage-job.html">Manage Job</a></li>
                          <li className="menu-item"><a href="employer-dashboard-message.html">Dashboard Message</a></li>
                          <li className="menu-item"><a href="employer-dashboard-pricing.html">Dashboard Pricing</a></li>
                          <li className="menu-item"><a href="employer-dashboard-post-job.html">Post Job</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item dropdown">
                    <a title="" href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <ul  className="dropdown-menu">
                      <li className="menu-item"><a href="about-us.html">About Us</a></li>
                      <li className="menu-item"><a href="how-it-work.html">How It Works</a></li>
                      <li className="menu-item"><a href="pricing.html">Pricing Plan</a></li>
                      <li className="menu-item"><a href="faq.html">FAQ</a></li>
                      <li className="menu-item dropdown">
                        <a href="#" data-toggle="dropdown"  className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">News &amp; Advices</a>
                        <ul className="dropdown-menu">
                          <li className="menu-item"><a href="blog.html">News</a></li>
                          <li className="menu-item"><a href="blog-grid.html">News Grid</a></li>
                          <li className="menu-item"><a href="blog-details.html">News Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item"><a href="checkout.html">Checkout</a></li>
                      <li className="menu-item"><a href="payment-complete.html">Payment Complete</a></li>
                      <li className="menu-item"><a href="invoice.html">Invoice</a></li>
                      <li className="menu-item"><a href="terms-and-condition.html">Terms And Condition</a></li>
                      <li className="menu-item"><a href="404.html">404 Page</a></li>
                      <li className="menu-item"><a href="login.html">Login</a></li>
                      <li className="menu-item"><a href="register.html">Register</a></li>
                    </ul>
                  </li>
                  <li className="menu-item"><a href="contact.html">Contact Us</a></li>
                  <li className="menu-item post-job"><a href="post-job.html"><i className="fas fa-plus"></i>Post a Job</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>


    <div className="account-entry">
      <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><i data-feather="user"></i>Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="form-group">
                  <input type="email" placeholder="Email Address" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control"/>
                </div>
                <div className="more-option">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Remember Me
                    </label>
                  </div>
                  <a href="#">Forget Password?</a>
                </div>
                <button className="button primary-bg btn-block">Login</button>
              </form>
              <div className="shortcut-login">
                <span>Or connect with</span>
                <div className="buttons">
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                  <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                </div>
                <p>Don't have an account? <a href="#">Register</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><i data-feather="edit"></i>Registration</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="account-type">
                <label for="idRegisterCan">
                  <input id="idRegisterCan" type="radio" name="register"/>
                  <span>Candidate</span>
                </label>
                <label for="idRegisterEmp">
                  <input id="idRegisterEmp" type="radio" name="register"/>
                  <span>Employer</span>
                </label>
              </div>
              <form action="#">
                <div className="form-group">
                  <input type="text" placeholder="Username" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="password" placeholder="Password" className="form-control"/>
                </div>
                <div className="more-option terms">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                    <label className="form-check-label" for="defaultCheck2">
                      I accept the <a href="#">terms & conditions</a>
                    </label>
                  </div>
                </div>
                <button className="button primary-bg btn-block">Register</button>
              </form>
              <div className="shortcut-login">
                <span>Or connect with</span>
                <div className="buttons">
                  <a href="#" className="facebook"><i className="fab fa-facebook-f"></i>Facebook</a>
                  <a href="#" className="google"><i className="fab fa-google"></i>Google</a>
                </div>
                <p>Already have an account? <a href="#">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div className="banner banner-3 banner-3-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-content">
              <h1>582 Job Listed</h1>
              <p>Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) is a University established under an 
                  Act of Gujarat State Legislature and 
                  recognized by the University Grants Commission and Association of Indian Universities.
                   It is a university devoted to the Information and Communication Technology. Established by the Reliance Group, 
                   DA-IICT is widely seen as an institution 'with a difference' in terms of its academic programs, faculty profiles 
                   and overall ambience. In a short period of fifteen years, it is consistently ranked as one of the best technological
                   nstitutes in the country in the fields of computer science, electronics and communication engineering and 
                   information technology.<br/><br/>
                  DA-IICT offers a unique B. Tech. Program in Information and Communication Technology, B. Tech 
                  (ICT with minors in Computational Science) and four post-graduate programs - M.Tech. (ICT), M.Sc. (IT),
                   M.Sc. (ICT - ARD) and M.Des. (CD). The curriculum of theses programs are carefully designed in 
                   consultation with industry experts to ensure that they are relevant to industry and society. 
                   DA-IICT is also deeply committed to seeing its students as responsible citizens and its social 
                   science courses and the rural internship program are designed to give a strong sense of cultural 
                   roots and social questions to the students.<br/><br/>
                    The Placement Cell at DA-IICT works professionally with the Industry to explore opportunities for 
                    DA-IICT graduates for placements. The Cell makes its best efforts to reach out to all sub-sectors 
                    of the industry in order to ensure that DA-IICT graduates spread across the industry.</p>
              <a href="add-resume.html" className="button">Upload Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <div className="searchAndFilter-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="searchAndFilter-block-3">
              <div className="searchAndFilter-3">
                <form action="#" className="search-form">
                  <div className="keyword">
                    <label>What?</label>
                    <input type="text" placeholder="Enter Your Keywords"/>
                  </div>
                  <div className="location-input">
                    <label>Where?</label>
                    <select className="selectpicker" id="search-location">
                      <option value="" selected>All Locations</option>
                      <option value="california">California</option>
                      <option value="las-vegas">Las Vegas</option>
                      <option value="new-work">New Work</option>
                      <option value="carolina">Carolina</option>
                      <option value="chicago">Chicago</option>
                      <option value="silicon-vally">Silicon Vally</option>
                      <option value="washington">Washington DC</option>
                      <option value="neveda">Neveda</option>
                    </select>
                  </div>
                  <div className="category-input">
                    <label>Category</label>
                    <select className="selectpicker" id="search-category">
                      <option value="" selected>All Categories</option>
                      <option value="real-state">Real State</option>
                      <option value="vehicales">Vehicales</option>
                      <option value="electronics">Electronics</option>
                      <option value="beauty">Beauty</option>
                      <option value="furnitures">Furnitures</option>
                    </select>
                  </div>
                  <button className="button primary-bg"><i className="fas fa-search"></i></button>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 


    <div className="section-padding-bottom alice-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-header section-header-2 section-header-with-right-content">
              <h2>Recent Jobs</h2>
              <a href="job-listing.html" className="header-right">+ Browse All Jobs</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
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
                    <span className="office-location"><a href="#"><i data-feather="map-pin"></i>Washington, D.C.</a></span>
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
        </div>
      </div>
    </div>
 


    <div className="section-padding-top padding-bottom-90">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-header">
              <h2>Top Companies</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="company-carousel owl-carousel">
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-1.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Digoin</a></h4>
                  <span>Kansas City, Missouri</span>
                  <a href="job-listing.html" className="button">4 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-2.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                  <span>Sacramento, California</span>
                  <a href="job-listing.html" className="button">2 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-3.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Realhouse</a></h4>
                  <span>London, United Kingdom</span>
                  <a href="job-listing.html" className="button">4 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-4.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">BioPro</a></h4>
                  <span>Ajax, Ontarioland</span>
                  <a href="job-listing.html" className="button">1 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-1.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Digoin</a></h4>
                  <span>Kansas City, Missouri</span>
                  <a href="job-listing.html" className="button">4 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-2.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Orion Ltd.</a></h4>
                  <span>Sacramento, California</span>
                  <a href="job-listing.html" className="button">2 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-3.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">Realhouse</a></h4>
                  <span>London, United Kingdom</span>
                  <a href="job-listing.html" className="button">4 Open Positions</a>
                </div>
              </div>
              <div className="company-wrap">
                <div className="thumb">
                  <a href="#">
                    <img src="images/company/company-logo-4.png" className="img-fluid" alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h4><a href="employer-details.html">BioPro</a></h4>
                  <span>Ajax, Ontarioland</span>
                  <a href="job-listing.html" className="button">1 Open Positions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};
export default HomePage;
