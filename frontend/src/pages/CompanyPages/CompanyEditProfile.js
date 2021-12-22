import React from 'react'
import CompanyNav from './CompanyNav'
import CompanySidebar from './CompanySidebar'


export const CompanyEditProfile = () => {
    return (
        <div>
           <CompanyNav/>
           <div classNameName="alice-bg padding-top-70 padding-bottom-70">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="breadcrumb-area">
              <h1>Employer Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Employer Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-md-6">
            <div className="breadcrumb-form">
              <form action="#">
                <input type="text" placeholder="Enter Keywords"/>
                <button><i data-feather="search"></i></button>
              </form>
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
                      <img className="image" src="dashboard/images/company-logo.png" alt=""/>
                    </div>
                    <div className="file-upload">            
                      <input type="file" className="file-input"/>Change Avatar
                    </div>
                  </div>
                  <div className="dashboard-section basic-info-input">
                    <h4><i data-feather="user-check"></i>Basic Info</h4>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Company Name</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Company Name"/>
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
                      <label className="col-sm-3 col-form-label">Category</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="UI & UX Designer"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">About Us</label>
                      <div className="col-sm-9">
                        <textarea className="form-control" placeholder=""></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-section media-inputs">
                    <h4><i data-feather="image"></i>Photo &amp; Video</h4>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Intro Video</label>
                      <div className="col-sm-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Link</div>
                          </div>
                          <input type="text" className="form-control" placeholder="https://www.youtube.com/watch?v=ZRkdyjJ_489M"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Gallery</label>
                      <div className="col-sm-9">
                        <div className="input-group image-upload-input">
                          <div className="input-group-prepend">
                            <div className="input-group-text">Image</div>
                          </div>
                          <div className="active">
                            <div className="upload-images">
                              <div className="pic">
                                <span className="ti-plus"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-section social-inputs">
                    <h4><i data-feather="cast"></i>Social Networks</h4>
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label">Social Links</label>
                      <div className="col-sm-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fab fa-facebook-f"></i></div>
                          </div>
                          <input type="text" className="form-control" placeholder="facebook.com/username"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-sm-3 col-sm-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fab fa-twitter"></i></div>
                          </div>
                          <input type="text" className="form-control" placeholder="twitter.com/username"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-sm-3 col-sm-9">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fab fa-google-plus"></i></div>
                          </div>
                          <input type="text" className="form-control" placeholder="google.com/username"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="offset-sm-3 col-sm-9">
                        <div className="input-group add-new">
                          <div className="input-group-prepend">
                            <div className="input-group-text dropdown-label">
                              <select className="form-control" id="exampleFormControlSelect1">
                                <option>Select</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select><i className="fa fa-caret-down"></i>
                            </div>
                          </div>
                          <input type="text" className="form-control" placeholder="Input Profile Link"/>
                        </div>
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
             <CompanySidebar/>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
