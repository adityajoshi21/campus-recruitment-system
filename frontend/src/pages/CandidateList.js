import React from 'react'

 const CandidateList = () => {
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
              <h1>Candidates List</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Candidates List</li>
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
            <div className="candidate-container">
              <div className="filtered-candidate-wrapper">
                <div className="candidate-view-controller-wrapper">
                  <div className="candidate-view-controller">
                    <div className="controller list active">
                      <i data-feather="menu"></i>
                    </div>
                    <div className="controller grid">
                      <i data-feather="grid"></i>
                    </div>
                    <div className="candidate-view-filter">
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
                <div className="candidate-filter-result">
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-1.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Lula Wallace</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Senior UI / UX Designer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-2.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Hertha A. Sullivan</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>IT Junior</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Washington, D.C.</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-3.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">David Johnston</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Accounting Manager</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>San Francisco</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-4.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Robert Hayes</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>UI Designer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-5.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Micheal N. Taylor</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>ios developer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Los Angeles</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-6.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Marjorie Huber</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Graphics Designer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Seattle</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-7.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">James C. Elliott</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Content Writer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>New York City</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-10.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Guy Appel</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Engineer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Baltimore</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-8.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Mario Havens</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Leader IT engineer</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Washington, D.C.</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
                      </div>
                    </div>
                  </div>
                  <div className="candidate">
                    <div className="thumb">
                      <a href="#">
                        <img src="images/candidate/thumb-9.jpg" className="img-fluid" alt=""/>
                      </a>
                    </div>
                    <div className="body">
                      <div className="content">
                        <h4><a href="candidate-details.html">Matthew Ruiz</a></h4>
                        <div className="info">
                          <span className="work-post"><a href="#"><i data-feather="check-square"></i>Web Develper</a></span>
                          <span className="location"><a href="#"><i data-feather="map-pin"></i>Philadelphia</a></span>
                        </div>
                      </div>
                      <div className="button-area">
                        <a href="#">View Resume</a>
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
              <div className="candidate-filter-wrapper">
                <div className="selected-options same-pad">
                  <div className="selection-title">
                    <h4>You Selected</h4>
                    <a href="#">Clear All</a>
                  </div>
                  <ul className="filtered-options">
                  </ul>
                </div>
                <div className="candidate-filter-dropdown same-pad category">
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
                <div className="candidate-filter-dropdown same-pad location">
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
                <div data-id="candidate-type" className="candidate-filter same-pad candidate-type">
                  <h4 className="option-title">Job Type</h4>
                  <ul>
                    <li className="full-time"><i data-feather="clock"></i><a href="#" data-attr="Full Time">Full Time</a></li>
                    <li className="part-time"><i data-feather="clock"></i><a href="#" data-attr="Part Time">Part Time</a></li>
                    
                  </ul>
                </div>
                <div data-id="experience" className="candidate-filter same-pad experience">
                  <h4 className="option-title">Experience</h4>
                  <ul>
                    <li><a href="#" data-attr="Fresh">Fresh</a></li>
                    <li><a href="#" data-attr="Less than 1 year">Less than 1 year</a></li>
                    <li><a href="#" data-attr="2 Year">2 Year</a></li>
                    <li><a href="#" data-attr="3 Year">3 Year</a></li>
                   
                  </ul>
                </div>
                <div className="candidate-filter same-pad">
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
               
                <div data-id="gender" className="candidate-filter same-pad gender">
                  <h4 className="option-title">Gender</h4>
                  <ul>
                    <li><a href="#" data-attr="Male">Male</a></li>
                    <li><a href="#" data-attr="Female">Female</a></li>
                  </ul>
                </div>
                <div data-id="qualification" className="candidate-filter same-pad qualification">
                  <h4 className="option-title">Qualification</h4>
                  <ul>
                    <li><a href="#" data-attr="Matriculation">Matriculation</a></li>
                    <li><a href="#" data-attr="Intermidiate">Intermidiate</a></li>
                    <li><a href="#" data-attr="Gradute">Graduate</a></li>
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
export default CandidateList;
