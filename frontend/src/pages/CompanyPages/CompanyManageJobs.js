import React from 'react'
import CompanyNav from './CompanyNav'
import CompanySidebar from './CompanySidebar'

export const CompanyManageJobs = () => {
    return (
        <div>
            <CompanyNav/>

            <div class="alice-bg padding-top-70 padding-bottom-70">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="breadcrumb-area">
              <h1>Company Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Company Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-md-6">
            <div class="breadcrumb-form">
              <form action="#">
                <input type="text" placeholder="Enter Keywords"/>
                <button><i data-feather="search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="alice-bg section-padding-bottom">
      <div class="container no-gliters">
        <div class="row no-gliters">
          <div class="col">
            <div class="dashboard-container">
              <div class="dashboard-content-wrapper">
                <div class="manage-job-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Applications</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th class="action">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Land Development Marketer</a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status active">Active</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Designer Required </a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type freelance"><a href="#"><i data-feather="clock"></i>Freelance</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status pending">Pending</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Restaurant Team Member - Crew</a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type temporary"><a href="#"><i data-feather="clock"></i>Temporary</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status expired">Expired</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Land Development Marketer</a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type full-time"><a href="#"><i data-feather="clock"></i>Full Time</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status active">Active</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Designer Required </a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type freelance"><a href="#"><i data-feather="clock"></i>Freelance</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status pending">Pending</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                      <tr class="job-items">
                        <td class="title">
                          <h5><a href="#">Restaurant Team Member - Crew</a></h5>
                          <div class="info">
                            <span class="office-location"><a href="#"><i data-feather="map-pin"></i>New Orleans</a></span>
                            <span class="job-type temporary"><a href="#"><i data-feather="clock"></i>Temporary</a></span>
                          </div>
                        </td>
                        <td class="application"><a href="#">6 Application(s)</a></td>
                        <td class="deadline">Oct 31,  2020</td>
                        <td class="status expired">Expired</td>
                        <td class="action">
                          <a href="#" class="preview" title="Preview"><i data-feather="eye"></i></a>
                          <a href="#" class="edit" title="Edit"><i data-feather="edit"></i></a>
                          <a href="#" class="remove" title="Delete"><i data-feather="trash-2"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="pagination-list text-center">
                    <nav class="navigation pagination">
                      <div class="nav-links">
                        <a class="prev page-numbers" href="#"><i class="fas fa-angle-left"></i></a>
                        <a class="page-numbers" href="#">1</a>
                        <span aria-current="page" class="page-numbers current">2</span>
                        <a class="page-numbers" href="#">3</a>
                        <a class="page-numbers" href="#">4</a>
                        <a class="next page-numbers" href="#"><i class="fas fa-angle-right"></i></a>
                      </div>
                    </nav>                
                  </div>
                </div>
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
