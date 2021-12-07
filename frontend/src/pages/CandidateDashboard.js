import React from 'react'

 const CandidateDashboard = () => {
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
              <h1>Candidates Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Candidates Dashboard</li>
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
            <div className="dashboard-container">
              <div className="dashboard-content-wrapper">
                <form action="#" className="dashboard-form">
                  <div className="dashboard-section upload-profile-photo">
                    <div className="update-photo">
                      <img className="image" src="dashboard/images/user-1.jpg" alt=""/>
                    </div>
                    <div className="file-upload">            
                      <input type="file" className="file-input"/>Change Avatar
                    </div>
                  </div>
                  <div className="dashboard-section basic-info-input">
                    <h4><i data-feather="user-check"></i>Basic Info</h4>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Full Name</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Full Name"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Username</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="@username"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Email Address</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="email@example.com"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Phone</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="+55 123 4563 4643"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Address</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Washington D.C"/>
                      </div>
                    </div>
                   
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">About Me</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder="Introduce Yourself"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-section basic-info-input">
                    <h4><i data-feather="lock"></i>Change Password</h4>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Current Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="Current Password"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">New Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="New Password"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Retype Password</label>
                      <div className="col-sm-9">
                        <input type="password" className="form-control" placeholder="Retype Password"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label"></label>
                      <div className="col-sm-9">
                        <button className="button">Save Change</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="dashboard-sidebar">
                <div className="user-info">
                  <div className="thumb">
                    <img src="dashboard/images/user-1.jpg" className="img-fluid" alt=""/>
                  </div>
                  <div className="user-body">
                    <h5>Lula Wallace</h5>
                    <span>@username</span>
                  </div>
                </div>
               
                <div className="dashboard-menu">
                  <ul>
                    <li><i className="fas fa-home"></i><a href="dashboard.html">Dashboard</a></li>
                    <li className="active"><i className="fas fa-user"></i><a href="dashboard-edit-profile.html">Edit Profile</a></li>
                    <li><i className="fas fa-file-alt"></i><a href="resume.html">Resume</a></li>
                    <li><i className="fas fa-edit"></i><a href="edit-resume.html">Edit Resume</a></li>
                    <li><i className="fas fa-heart"></i><a href="dashboard-bookmark.html">Bookmarked</a></li>
                    <li><i className="fas fa-check-square"></i><a href="dashboard-applied.html">Applied Job</a></li>
                    <li><i className="fas fa-comment"></i><a href="dashboard-message.html">Message</a></li>
                  
                  </ul>
                  <ul className="delete">
                    <li><i className="fas fa-power-off"></i><a href="#">Logout</a></li>
                    <li><i className="fas fa-trash-alt"></i><a href="#" data-toggle="modal" data-target="#modal-delete">Delete Profile</a></li>
                  </ul>
                

                  <div className="modal fade modal-delete" id="modal-delete" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-body">
                          <h4><i data-feather="trash-2"></i>Delete Account</h4>
                          <p>Are you sure! You want to delete your profile. This can't be undone!</p>
                          <form action="#">
                            <div className="form-group">
                              <input type="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="buttons">
                              <button className="delete-button">Save Update</button>
                              <button className="">Cancel</button>
                            </div>
                            <div className="form-group form-check">
                              <input type="checkbox" className="form-check-input" checked=""/>
                              <label className="form-check-label">You accepts our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></label>
                            </div>
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
      </div>
    </div>
        </div>
    )
}
export default CandidateDashboard;