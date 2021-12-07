import React from 'react'

 const AddResume = () => {
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


    <div className="alice-bg padding-top-70 padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="breadcrumb-area">
              <h1>Add Resume</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Add Resume</li>
                </ol>
              </nav>
            </div>
          </div>
          
        </div>
      </div>
    </div>
   

    <div className="alice-bg section-padding-bottom">
      <div className="container no-gliters">
        <div className="row no-gliters">
          <div className="col">
            <div className="post-container">
              <div className="post-content-wrapper">
                <form action="#" className="job-post-form">
                  <div className="basic-info-input">
                    <h4><i data-feather="plus-circle"></i>Add Resume</h4>
                    <div id="full-name" className="form-group row">
                      <label className="col-md-3 col-form-label">Full Name</label>
                      <div className="col-md-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div id="information" className="row">
                      <label className="col-md-3 col-form-label">Information</label>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Select Category</option>
                                <option>Accounting / Finance</option>
                                <option>Health Care</option>
                                <option>Garments / Textile</option>
                                <option>Telecommunication</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Location"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Job Type</option>
                                <option>Part Time</option>
                                <option>Full Time</option>
                                <option>Temperory</option>
                                <option>Permanent</option>
                                <option>Freelance</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Experience (Optional)</option>
                                <option>Less than 1 Year</option>
                                <option>2 Year</option>
                                <option>3 Year</option>
                                <option>4 Year</option>
                                <option>Over 5 Year</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Salary Range"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Qualification</option>
                                <option>Matriculation</option>
                                <option>Intermidiate</option>
                                <option>Gradute</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="date" className="form-control"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group datepicker">
                              <input type="text" className="form-control" placeholder="Your Skill"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="about" className="row">
                      <label className="col-md-3 col-form-label">About You</label>
                      <div className="col-md-9">
                        <textarea className="tinymce-editor-1" placeholder="Description text here"></textarea>
                      </div>
                    </div>
                    <div id="education" className="row">
                      <label className="col-md-3 col-form-label">Education</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Designation"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-md-3 col-form-label">EDUCATION 01</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Institute"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Period"/>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Description (Optional)"></textarea>
                        </div>
                        <a href="#" className="add-new-field">+ Add Education</a>
                      </div>
                    </div>
                    <div id="experience" className="row">
                      <label className="col-md-3 col-form-label">Work Experience</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Designation"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-md-3 col-form-label">Experience 01</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Company Name"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Period"/>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Description (Optional)"></textarea>
                        </div>
                        <a href="#" className="add-new-field">+ Add Experience</a>
                      </div>
                    </div>
                    <div id="skill" className="row">
                      <label className="col-md-3 col-form-label">Professional Skill</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Designation"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-md-3 col-form-label">SKILL 01</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Title"/>
                        </div>
                        <div className="form-group">
                          <input type="number" className="form-control" placeholder="value (Percen)"/>
                        </div>
                        <a href="#" className="add-new-field">+ Add Experience</a>
                      </div>
                    </div>
                    <div id="qualification" className="row">
                      <label className="col-md-3 col-form-label">Special Qualification</label>
                      <div className="col-md-9">
                        <textarea id="tiny" className="tinymce-editor-2" placeholder="Description text here"></textarea>
                      </div>
                    </div>
                    <div id="portfolio" className="row">
                      <label className="col-md-3 col-form-label">Portfolio</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Title"/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-md-3 col-form-label">PORTFOLIO 01</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text">Image</div>
                            </div>
                            <div className="upload-portfolio-image">
                              <div className="update-photo">
                                <img className="image" src="images/portfolio/thumb-1.jpg" alt=""/>
                              </div>
                              <div className="file-upload">
                                <input type="file" className="file-input"/>
                                <i data-feather="plus"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Portfolio Link (Optional)"/>
                        </div>
                        <a href="#" className="add-new-field">+ Add Portfolio</a>
                      </div>
                    </div>
                    <div id="cv" className="row form-group">
                      <label className="col-md-3 col-form-label">Upload CV</label>
                      <div className="col-md-9">
                        <div className="add-cv">
                          <input type="file"/>CV File<i data-feather="upload-cloud"></i>
                        </div>
                      </div>
                    </div>
                    <div id="cover" className="row">
                      <label className="col-md-3 col-form-label">Cover Letter</label>
                      <div className="col-md-9">
                        <textarea className="tinymce-editor-1" placeholder="Description text here"></textarea>
                      </div>
                    </div>
                    <div id="profile" className="row">
                      <label className="col-md-3 col-form-label">Social Profile</label>
                      <div className="col-md-9">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="input-group-text dropdown-label">
                                <select className="form-control">
                                  <option>Select</option>
                                  <option>Facebook</option>
                                  <option>Twitter</option>
                                  <option>Linkedin</option>
                                  <option>Instagram</option>
                                </select><i className="fa fa-caret-down"></i>
                              </div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Input Profile Link"/>
                          </div>
                        </div>
                        <a href="#" className="add-new-field">+ Add Social</a>
                      </div>
                    </div>
                    <div id="details" className="row">
                      <label className="col-md-3 col-form-label">Personal Details</label>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Father's Name"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Mother's Name"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="date" className="form-control"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Nationality"/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Sex</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                              <i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your Address"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9 offset-md-3">
                        <div className="form-group mt-0 terms">
                          <input className="custom-radio" type="checkbox" id="radio-4" name="termsandcondition"/>
                          <label for="radio-4">
                            <span className="dot"></span> You accepts our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 col-form-label"></label>
                      <div className="col-md-9">
                        <button className="button">Publish Resume</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="post-sidebar">
                <h5><i data-feather="arrow-down-circle"></i>Navigation</h5>
                <ul className="sidebar-menu">
                  <li><a href="#full-name">Full Name</a></li>
                  <li><a href="#information">Informations</a></li>
                  <li><a href="#about">About You</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#experience">Work Experiance</a></li>
                  <li><a href="#skill">Professional Skill</a></li>
                  <li><a href="#qualification">Special Qualification</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#cv">Upload CV</a></li>
                  <li><a href="#cover">Cover Letter</a></li>
                  <li><a href="#profile">Social Profile</a></li>
                  <li><a href="#details">Personal Details</a></li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    
        </div>
    )
}
export default AddResume;