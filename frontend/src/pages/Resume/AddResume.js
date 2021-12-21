import React from 'react'
import StudentNav from '../StudentNav';

 const AddResume = () => {
    return (
        <div>
            
    <StudentNav/>


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