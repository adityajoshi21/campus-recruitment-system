import React from 'react'

 const JobDetails = () => {
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
                <div className="dropdown header-top-account">
                  <a href="#" className="account-button">My Account</a>
                  <div className="account-card">
                    <div className="header-top-account-info">
                      <a href="#" className="account-thumb">
                        <img src="images/account/thumb-1.jpg" className="img-fluid" alt=""/>
                      </a>
                      <div className="account-body">
                        <h5><a href="#">Robert Chavez</a></h5>
                        <span className="mail">chavez@domain.com</span>
                      </div>
                    </div>
                    <ul className="account-item-list">
                      <li><a href="#"><span className="ti-user"></span>Account</a></li>
                      <li><a href="#"><span className="ti-settings"></span>Settings</a></li>
                      <li><a href="#"><span className="ti-power-off"></span>Log Out</a></li>
                    </ul>
                  </div>
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


    <div className="alice-bg padding-top-60 section-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="job-listing-details">
              <div className="job-title-and-info">
                <div className="title">
                  <div className="thumb">
                    <img src="images/job/company-logo-1.png" className="img-fluid" alt=""/>
                  </div>
                  <div className="title-body">
                    <h4>Designer Required</h4>
                    <div className="info">
                      <span className="company"><a href="#"><i data-feather="briefcase"></i>Theoreo</a></span>
                      <span className="office-location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                      <span className="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
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
                      <p>Combined with a handful of model sentence structures, to generate lorem Ipsum which  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.</p>
                      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable </p>
                    </div>
                    <div className="responsibilities details-section">
                      <h4><i data-feather="zap"></i>Responsibilities</h4>
                      <ul>
                        <li>The applicants should have experience in the following areas</li>
                        <li>Skills on M.S Word, Excel, and Integrated Accounting package i.e. Software</li>
                        <li>Have sound knowledge of commercial activities.</li>
                        <li>Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                        <li>Good verbal and written communication skills.</li>
                        <li>Leadership, analytical, and problem-solving abilities.</li>
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
                      <a href="#" className="apply"  data-toggle="modal" data-target="#apply-popup-id">Apply Online</a>
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
                      <div className="share-job-post">
                        <span className="share"><i className="fas fa-share-alt"></i>Share:</span>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#" className="add-more"><span className="ti-plus"></span></a>
                      </div>
                      <div className="buttons">
                        <a href="#" className="button print"><i data-feather="printer"></i>Print Job</a>
                        <a href="#" className="button report"><i data-feather="flag"></i>Report Job</a>
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
    

    <div className="section-padding-bottom alice-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-header section-header-2 section-header-with-right-content">
              <h2>Simillar Jobs</h2>
              <a href="#" className="header-right">+ Browse All Jobs</a>
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
                    <a href="#" className="button">Apply Now</a>
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
                    <a href="#" className="button">Apply Now</a>
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
                    <a href="#" className="button">Apply Now</a>
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
                    <a href="#" className="button">Apply Now</a>
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
                    <a href="#" className="button">Apply Now</a>
                    <a href="#" className="favourite"><i data-feather="heart"></i></a>
                  </div>
                  <p className="deadline">Deadline: Oct 31,  2020</p>
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
export default JobDetails;