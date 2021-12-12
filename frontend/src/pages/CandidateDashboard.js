import React from 'react'
import StudentNav from './StudentNav'
 const CandidateDashboard = () => {
    return (
        <div>
           <StudentNav/>


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