import React from 'react'
import StudentNav from './StudentNav';
import Listing from './HomePage/Listing';
import RecentJobsData from './HomePage/RecentJobsData';
 const JobDetails = () => {
    return (
        <div>
          <StudentNav/>


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
          {
          RecentJobsData.map(recentJobdata=>{
            return(
              <Listing 
              image={recentJobdata.img}
              JobTitle={recentJobdata.JobTitle}
              company={recentJobdata.city}
              city={recentJobdata.city}
              type={recentJobdata.type}
              deadline={recentJobdata.deadline}
              />
            );
          })
        }
          </div>
        </div>
      </div>
    </div>
   
        </div>
    )
}
export default JobDetails;