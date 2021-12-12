import React from 'react'
import { Link } from "react-router-dom";
 const CompanySidebar = () => {
    return (
       
              <div class="dashboard-sidebar">
                <div class="company-info">
                  <div class="thumb">
                    <img src="dashboard/images/company-logo.png" class="img-fluid" alt=""/>
                  </div>
                  <div class="company-body">
                    <h5>Degoin</h5>
                    <span>@username</span>
                  </div>
                </div>
              
                <div class="dashboard-menu">
                <ul>
                    <li class="active"> <Link to="/" ><i class="fas fa-home"></i>Dashboard</Link></li>
                    <li ><Link to="/editprofile" ><i class="fas fa-user"></i>Edit Profile</Link></li>
                    <li><Link to="/managejobs" ><i class="fas fa-briefcase"></i>Manage Jobs</Link></li>
                   
                    <li><Link to="/postjobs"><i class="fas fa-plus-square"></i>Post New Job</Link></li>
                     </ul>
                  <ul class="delete">
                    <li><i class="fas fa-power-off"></i><a href="#">Logout</a></li>
                    <li><i class="fas fa-trash-alt"></i><a href="#" data-toggle="modal" data-target="#modal-delete">Delete Profile</a></li>
                  </ul>
             
                  <div class="modal fade modal-delete" id="modal-delete" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                          <h4><i data-feather="trash-2"></i>Delete Account</h4>
                          <p>Are you sure! You want to delete your profile. This can't be undone!</p>
                          <form action="#">
                            <div class="form-group">
                              <input type="password" class="form-control" placeholder="Enter password"/>
                            </div>
                            <div class="buttons">
                              <button class="delete-button">Save Update</button>
                              <button class="">Cancel</button>
                            </div>
                            <div class="form-group form-check">
                              <input type="checkbox" class="form-check-input" checked=""/>
                              <label class="form-check-label">You accepts our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></label>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     
    )
}

export default CompanySidebar;