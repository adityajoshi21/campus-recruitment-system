/* eslint-disable */
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav">
                    <a className="navbar-brand" href="index.html">
                        <img src="/images/logo.png" className="img-fluid" alt=""/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto job-browse">
                            <li className="nav-item dropdown">
                                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Browse Jobs
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="search-by">
                                        <h5>BY Category</h5>
                                        <ul>
                                            <li><a href="#">Accounting / Finance<span>(233)</span></a></li>
                                            <li><a href="#">Education<span>(46)</span></a></li>
                                            <li><a href="#">Design &amp; Creative<span>(156)</span></a></li>
                                            <li><a href="#">Health Care<span>(98)</span></a></li>
                                            <li><a href="#">Engineer &amp; Architects<span>(188)</span></a></li>
                                            <li><a href="#">Marketing &amp; Sales<span>(124)</span></a></li>
                                            <li><a href="#">Garments / Textile<span>(584)</span></a></li>
                                            <li><a href="#">Customer Support<span>(233)</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="search-by">
                                        <h5>BY LOcation</h5>
                                        <ul>
                                            <li><a href="#">New York City<span>(508)</span></a></li>
                                            <li><a href="#">Washington, D.C<span>(96)</span></a></li>
                                            <li><a href="#">Chicago<span>(155)</span></a></li>
                                            <li><a href="#">San Francisco<span>(24)</span></a></li>
                                            <li><a href="#">Los Angeles<span>(268)</span></a></li>
                                            <li><a href="#">Boston<span>(46)</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto main-nav">
                            <li className="menu-item active">
                                <a title="H" href="home-1.html">
                                    Home
                                </a>
                            </li>
                            <li className="menu-item dropdown">
                                <a title href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    Jobs
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="menu-item">
                                        <a href="job-listing.html">Job Listing</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="job-listing-with-map.html">Job Listing With Map</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="job-details.html">Job Details</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="post-job.html">Post Job</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item dropdown">
                                <a title href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    Employer
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="menu-item">
                                        <a href="employer-listing.html">Employer Listing</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-details.html">Employer Details</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard.html">Dashboard</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-edit-profile.html">
                                            Edit Profile
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-manage-candidate.html">
                                            Manage Candidate
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-manage-job.html">Manage Job</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-message.html">Message</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-pricing.html">Pricing</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="employer-dashboard-post-job.html">Post Job</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item dropdown">
                                <a title href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    Candidate
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="menu-item">
                                        <a href="candidate.html">Candidate List</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="candidate-details.html">Candidate Details</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard.html">Dashboard</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-edit-profile.html">Edit Profile</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="add-resume.html">Add Resume</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="resume.html">Resume</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="edit-resume.html">Edit Resume</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-bookmark.html">Bookmarked</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-applied.html">Applied</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-pricing.html">Pricing</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-message.html">Message</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="dashboard-alert.html">Alert</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item dropdown">
                                <a title href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="menu-item">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="blog-grid.html">Blog Grid</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="blog-details.html">Blog Details</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="pricing.html">Pricing</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="how-it-work.html">How It Works</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="faq.html">FAQ</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="payment-complete.html">Payment Complete</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="invoice.html">Invoice</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="terms-and-condition.html">Terms And Condition</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="404.html">404 Page</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="register.html">Register</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item post-job">
                                <a title="Title" href="post-job.html">
                                    <i className="fas fa-plus"/>
                                    Post a Job
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto account-nav">
                            <li className="dropdown menu-item header-top-notification">
                                <a href="#" className="notification-button"/>
                                <div className="notification-card">
                                    <div className="notification-head">
                                        <span>Notifications</span>
                                        <a href="#">Mark all as read</a>
                                    </div>
                                    <div className="notification-body">
                                        <a href="home-2.html" className="notification-list">
                                            <i className="fas fa-bolt"/>
                                            <p>Your Resume Updated!</p>
                                            <span className="time">5 hours ago</span>
                                        </a>
                                        <a href="#" className="notification-list">
                                            <i className="fas fa-arrow-circle-down"/>
                                            <p>Someone downloaded resume</p>
                                            <span className="time">11 hours ago</span>
                                        </a>
                                        <a href="#" className="notification-list">
                                            <i className="fas fa-check-square"/>
                                            <p>
                                                You applied for Project Manager
                                                <span>@homeland</span>
                                            </p>
                                            <span className="time">11 hours ago</span>
                                        </a>
                                        <a href="#" className="notification-list">
                                            <i className="fas fa-user"/>
                                            <p>You changed password</p>
                                            <span className="time">5 hours ago</span>
                                        </a>
                                        <a href="#" className="notification-list">
                                            <i className="fas fa-arrow-circle-down"/>
                                            <p>Someone downloaded resume</p>
                                            <span className="time">11 hours ago</span>
                                        </a>
                                    </div>
                                    <div className="notification-footer">
                                        <a href="#">See all notification</a>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item login-popup">
                                <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">
                                    Login
                                </button>
                            </li>
                            <li className="menu-item login-popup">
                                <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong2">
                                    Registration
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="account-entry">
                    <div className="modal fade" id="exampleModalLong"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <i data-feather="user"/>
                                        Login
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
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
                                                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <a href="#">Forget Password?</a>
                                        </div>
                                        <button className="button primary-bg btn-block">
                                            Login
                                        </button>
                                    </form>
                                    <div className="shortcut-login">
                                        <span>Or connect with</span>
                                        <div className="buttons">
                                            <a href="#" className="facebook">
                                                <i className="fab fa-facebook-f"/>
                                                Facebook
                                            </a>
                                            <a href="#" className="google">
                                                <i className="fab fa-google"/>
                                                Google
                                            </a>
                                        </div>
                                        <p>
                                            Don't have an account?
                                            <a href="#">Register</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModalLong2"
                        tabIndex={-1}
                        role="dialog"
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <i data-feather="edit"/>
                                        Registration
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="account-type">
                                        <label htmlFor="idRegisterCan">
                                            <input id="idRegisterCan" type="radio" name="register"/>
                                            <span>Candidate</span>
                                        </label>
                                        <label htmlFor="idRegisterEmp">
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
                                                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2"/>
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    I accept the
                                                    <a href="#">terms &amp; conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="button primary-bg btn-block">
                                            Register
                                        </button>
                                    </form>
                                    <div className="shortcut-login">
                                        <span>Or connect with</span>
                                        <div className="buttons">
                                            <a href="#" className="facebook">
                                                <i className="fab fa-facebook-f"/>
                                                Facebook
                                            </a>
                                            <a href="#" className="google">
                                                <i className="fab fa-google"/>
                                                Google
                                            </a>
                                        </div>
                                        <p>
                                            Already have an account?
                                            <a href="#">Login</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="banner banner-1 banner-1-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="banner-content">
                                <h1>58,246 Job Listed</h1>
                                <p>
                                    Create free account to find thousands Jobs, Employment &amp;
                                                                        									Career Opportunities around you!
                                </p>
                                <a href="add-resume.html" className="button">
                                    Upload Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="searchAndFilter-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="searchAndFilter-block">
                                <div className="searchAndFilter">
                                    <form action="#" className="search-form">
                                        <input type="text" placeholder="Enter Keywords"/>
                                        <select className="selectpicker" id="search-location">
                                            <option value selected>
                                                Location
                                            </option>
                                            <option value="california">California</option>
                                            <option value="las-vegas">Las Vegas</option>
                                            <option value="new-work">New Work</option>
                                            <option value="carolina">Carolina</option>
                                            <option value="chicago">Chicago</option>
                                            <option value="silicon-vally">Silicon Vally</option>
                                            <option value="washington">Washington DC</option>
                                            <option value="neveda">Neveda</option>
                                        </select>
                                        <select className="selectpicker" id="search-category">
                                            <option value selected>
                                                Category
                                            </option>
                                            <option value="real-state">Real State</option>
                                            <option value="vehicales">Vehicales</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="beauty">Beauty</option>
                                            <option value="furnitures">Furnitures</option>
                                        </select>
                                        <button className="button primary-bg">
                                            <i className="fas fa-search"/>
                                            Search Job
                                        </button>
                                    </form>
                                    <div className="filter-categories">
                                        <h4>Job Category</h4>
                                        <ul>
                                            <li><a href="job-listing.html"><i data-feather="bar-chart-2"/>Accounting / Finance<span>(233)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="edit-3"/>Education<span>(46)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="feather"/>Design &amp; Creative<span>(156)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="briefcase"/>Health Care<span>(98)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="package"/>Engineer &amp; Architects<span>(188)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="pie-chart"/>Marketing &amp; Sales<span>(124)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="command"/>Garments / Textile<span>(584)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="globe"/>Customer Support<span>(233)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="headphones"/>Digital Media<span>(15)</span></a></li>
                                            <li><a href="job-listing.html"><i data-feather="radio"/>Telecommunication<span>(03)</span></a></li>
                                        </ul>
                                    </div>
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
                            <ul className="nav nav-tabs job-tab" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="recent-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="true">
                                        Recent Job
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="feature-tab" data-toggle="tab" href="#feature" role="tab" aria-controls="feature" aria-selected="false">
                                        Feature Job
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-8.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Restaurant Team Member - Crew{' '} </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Geologitic
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New Orleans
                                                                </a>
                                                            </span>
                                                            <span className="job-type temporary">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Temporary
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-9.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Nutrition Advisor</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-10.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">UI Designer</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-3.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Land Development Marketer
                                                            </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Realouse
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    Washington, D.C.
                                                                </a>
                                                            </span>
                                                            <span className="job-type freelance">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Freelance
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-10.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">UI Designer</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-3.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Land Development Marketer
                                                            </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Realouse
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    Washington, D.C.
                                                                </a>
                                                            </span>
                                                            <span className="job-type freelance">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Freelance
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-1.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Designer Required</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-2.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Project Manager</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-8.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Restaurant Team Member - Crew{' '} </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Geologitic
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New Orleans
                                                                </a>
                                                            </span>
                                                            <span className="job-type temporary">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Temporary
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-9.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Nutrition Advisor</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-1.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Designer Required</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-2.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Project Manager</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="feature" role="tabpanel" aria-labelledby="feature-tab">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-10.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">UI Designer</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-1.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">Designer Required</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-2.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">Project Manager</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-1.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">Designer Required</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-8.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">
                                                                Restaurant Team Member - Crew{' '} </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Geologitic
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New Orleans
                                                                </a>
                                                            </span>
                                                            <span className="job-type temporary">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Temporary
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-9.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-listing.html">Nutrition Advisor</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-3.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Land Development Marketer
                                                            </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Realouse
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    Washington, D.C.
                                                                </a>
                                                            </span>
                                                            <span className="job-type freelance">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Freelance
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-2.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Project Manager</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-8.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Restaurant Team Member - Crew{' '} </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Geologitic
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New Orleans
                                                                </a>
                                                            </span>
                                                            <span className="job-type temporary">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Temporary
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-9.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">Nutrition Advisor</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Theoreo
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    New York City
                                                                </a>
                                                            </span>
                                                            <span className="job-type full-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Full Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-10.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">UI Designer</a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Degoin
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    San Francisco
                                                                </a>
                                                            </span>
                                                            <span className="job-type part-time">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Part Time
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="job-list half-grid">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="/images/job/company-logo-3.png" className="img-fluid" alt/>
                                                    </a>
                                                </div>
                                                <div className="body">
                                                    <div className="content">
                                                        <h4>
                                                            <a href="job-details.html">
                                                                Land Development Marketer
                                                            </a>
                                                        </h4>
                                                        <div className="info">
                                                            <span className="company">
                                                                <a href="#">
                                                                    <i data-feather="briefcase"/>
                                                                    Realouse
                                                                </a>
                                                            </span>
                                                            <span className="office-location">
                                                                <a href="#">
                                                                    <i data-feather="map-pin"/>
                                                                    Washington, D.C.
                                                                </a>
                                                            </span>
                                                            <span className="job-type freelance">
                                                                <a href="#">
                                                                    <i data-feather="clock"/>
                                                                    Freelance
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="more">
                                                        <div className="buttons">
                                                            <a href="#" className="button">
                                                                Apply Now
                                                            </a>
                                                            <a href="#" className="favourite">
                                                                <i data-feather="heart"/>
                                                            </a>
                                                        </div>
                                                        <p className="deadline">Deadline: Oct 31, 2018</p>
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
                                            <img src="/images/company/company-logo-1.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Digoin</a>
                                        </h4>
                                        <span>Kansas City, Missouri</span>
                                        <a href="job-listing.html" className="button">
                                            4 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-2.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Orion Ltd.</a>
                                        </h4>
                                        <span>Sacramento, California</span>
                                        <a href="job-listing.html" className="button">
                                            2 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-3.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Realhouse</a>
                                        </h4>
                                        <span>London, United Kingdom</span>
                                        <a href="job-listing.html" className="button">
                                            4 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-4.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">BioPro</a>
                                        </h4>
                                        <span>Ajax, Ontarioland</span>
                                        <a href="job-listing.html" className="button">
                                            1 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-1.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Digoin</a>
                                        </h4>
                                        <span>Kansas City, Missouri</span>
                                        <a href="job-listing.html" className="button">
                                            4 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-2.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Orion Ltd.</a>
                                        </h4>
                                        <span>Sacramento, California</span>
                                        <a href="job-listing.html" className="button">
                                            2 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-3.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">Realhouse</a>
                                        </h4>
                                        <span>London, United Kingdom</span>
                                        <a href="job-listing.html" className="button">
                                            4 Open Positions
                                        </a>
                                    </div>
                                </div>
                                <div className="company-wrap">
                                    <div className="thumb">
                                        <a href="#">
                                            <img src="/images/company/company-logo-4.png" className="img-fluid" alt/>
                                        </a>
                                    </div>
                                    <div className="body">
                                        <h4>
                                            <a href="employer-details.html">BioPro</a>
                                        </h4>
                                        <span>Ajax, Ontarioland</span>
                                        <a href="job-listing.html" className="button">
                                            1 Open Positions
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="padding-top-90 padding-bottom-60 fact-bg">
                <div className="container">
                    <div className="row fact-items">
                        <div className="col-md-3 col-sm-6">
                            <div className="fact">
                                <div className="fact-icon">
                                    <i data-feather="briefcase"/>
                                </div>
                                <p className="fact-number">
                                    <span className="count"
                                        data-form={0}
                                        data-to={12376}/>
                                </p>
                                <p className="fact-name">Live Jobs</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fact">
                                <div className="fact-icon">
                                    <i data-feather="users"/>
                                </div>
                                <p className="fact-number">
                                    <span className="count"
                                        data-form={0}
                                        data-to={89562}/>
                                </p>
                                <p className="fact-name">Candidate</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fact">
                                <div className="fact-icon">
                                    <i data-feather="file-text"/>
                                </div>
                                <p className="fact-number">
                                    <span className="count"
                                        data-form={0}
                                        data-to={28166}/>
                                </p>
                                <p className="fact-name">Resume</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="fact">
                                <div className="fact-icon">
                                    <i data-feather="award"/>
                                </div>
                                <p className="fact-number">
                                    <span className="count"
                                        data-form={0}
                                        data-to={1366}/>
                                </p>
                                <p className="fact-name">Companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="call-to-action-box candidate-box">
                                <div className="icon">
                                    <img layout="fill" src="/images/register-box/1.png" alt/>
                                </div>
                                <span>Are You</span>
                                <h3>Candidate?</h3>
                                <a href="#" data-toggle="modal" data-target="#exampleModalLong2">
                                    Register Now
                                    <i className="fas fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="call-to-action-box employer-register">
                                <div className="icon">
                                    <img layout="fill" src="/images/register-box/2.png" alt/>
                                </div>
                                <span>Are You</span>
                                <h3>Employer?</h3>
                                <a href="#" data-toggle="modal" data-target="#exampleModalLong3">
                                    Register Now
                                    <i className="fas fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-entry">
                <div className="modal fade" id="exampleModalLong3"
                    tabIndex={-1}
                    role="dialog"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i data-feather="edit"/>
                                    Registration
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="account-type">
                                    <a href="#" className="candidate-acc">
                                        <i data-feather="user"/>
                                        Candidate
                                    </a>
                                    <a href="#" className="employer-acc active">
                                        <i data-feather="briefcase"/>
                                        Employer
                                    </a>
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
                                            <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck3"/>
                                            <label className="form-check-label" htmlFor="defaultCheck3">
                                                I accept the
                                                <a href="#">terms &amp; conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="button primary-bg btn-block">
                                        Register
                                    </button>
                                </form>
                                <div className="shortcut-login">
                                    <span>Or connect with</span>
                                    <div className="buttons">
                                        <a href="#" className="facebook">
                                            <i className="fab fa-facebook-f"/>
                                            Facebook
                                        </a>
                                        <a href="#" className="google">
                                            <i className="fab fa-google"/>
                                            Google
                                        </a>
                                    </div>
                                    <p>
                                        Already have an account?
                                        <a href="#">Login</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial">
                                <div className="testimonial-quote">
                                    <img src="/images/testimonial/quote.png" className="img-fluid" alt/>
                                </div>
                                <div className="testimonial-for">
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob One”
                                        </p>
                                        <h5>Maria Marlin @ Google</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Two”
                                        </p>
                                        <h5>Laura Harper @ Amazon</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Three”
                                        </p>
                                        <h5>John Doe @ Envato</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Four”
                                        </p>
                                        <h5>Jenny Doe @ Dribbble</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Five”
                                        </p>
                                        <h5>Michle Clark @ Apple</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Two”
                                        </p>
                                        <h5>Laura Harper @ Amazon</h5>
                                    </div>
                                    <div className="testimonial-item">
                                        <p>
                                            “On the other hand, we denounce with righteous indignation
                                                                                        											and dislike men who are so beguiled and demoralized by the
                                                                                        											charmsto send our denim shorts wardrob Three”
                                        </p>
                                        <h5>John Doe @ Envato</h5>
                                    </div>
                                </div>
                                <div className="testimonial-nav">
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-1.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/1.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-2.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/2.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-3.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/3.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-4.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/4.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-5.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/5.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-2.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/2.png" className="comapnyLogo" alt/>
                                    </div>
                                    <div className="commenter-thumb">
                                        <img src="/images/testimonial/thumb-3.jpg" className="img-fluid commenter" alt/>
                                        <img src="/images/testimonial/3.png" className="comapnyLogo" alt/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-bg padding-top-90 padding-bottom-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="newsletter-wrap">
                                <h3>Newsletter</h3>
                                <p>
                                    Get e-mail updates about our latest news and Special offers.
                                                                        									We don’t send spam so don’t worry.
                                </p>
                                <form action="#" className="newsletter-form form-inline">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email address..."/>
                                    </div>
                                    <button className="btn button">
                                        Submit
                                        <i className="fas fa-caret-right"/>
                                    </button>
                                    <p className="newsletter-error">0 - Please enter a value</p>
                                    <p className="newsletter-success">
                                        Thank you for subscribing!
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-bg">
                <div className="footer-top border-bottom section-padding-top padding-bottom-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src="/images/footer-logo.png" className="img-fluid" alt/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-social">
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#">
                                                <i data-feather="facebook"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-feather="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-feather="linkedin"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-feather="instagram"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i data-feather="youtube"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <select className="selectpicker select-language" id="select-country">
                                        <option value="United States of America" selected>
                                            EN
                                        </option>
                                        <option value="United Kingdom">GB</option>
                                        <option value="Spain">ES</option>
                                        <option value="Portugal">PT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6">
                                <div className="footer-widget widget-about">
                                    <h4>About Us</h4>
                                    <div className="widget-inner">
                                        <p className="description">
                                            There are many variations of passages of Lorem Ipsum
                                                                                        											available, but the majority have suffered alteration in
                                                                                        											some form, by injected humour.
                                        </p>
                                        <span className="about-contact">
                                            <i data-feather="phone-forwarded"/>
                                            +8 246-345-0698
                                        </span>
                                        <span className="about-contact">
                                            <i data-feather="mail"/>
                                            supportmail@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-sm-6">
                                <div className="footer-widget footer-shortcut-link">
                                    <h4>Information</h4>
                                    <div className="widget-inner">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms &amp; Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget footer-shortcut-link">
                                    <h4>Job Seekers</h4>
                                    <div className="widget-inner">
                                        <ul>
                                            <li><a href="#">Create Account</a></li>
                                            <li><a href="#">Career Counseling</a></li>
                                            <li><a href="#">My Oficiona</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Video Guides</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget footer-shortcut-link">
                                    <h4>Employers</h4>
                                    <div className="widget-inner">
                                        <ul>
                                            <li><a href="#">Create Account</a></li>
                                            <li><a href="#">Products/Service</a></li>
                                            <li><a href="#">Post a Job</a></li>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer-bottom border-top">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-5 order-lg-2">
                                            <div className="footer-app-download">
                                                <a href="#" className="apple-app">
                                                    Apple Store
                                                </a>
                                                <a href="#" className="android-app">
                                                    Google Play
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 order-lg-1">
                                            <p className="copyright-text">
                                                Copyright
                                                <a href="#">Oficiona</a>
                                                2020, All right
                                                                                                												reserved
                                            </p>
                                        </div>
                                        <div className="col-xl-4 col-lg-3 order-lg-3">
                                            <div className="back-to-top">
                                                <a href="#">
                                                    Back to top
                                                    <i className="fas fa-angle-up"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
