import React from 'react'
import { CompanyEditProfile } from './CompanyEditProfile'
import { CompanyManageJobs } from './CompanyManageJobs'
import CompanyNav from './CompanyNav'
import { CompanyPostJobs } from './CompanyPostJobs'
import CompanySidebar from './CompanySidebar'
import { RecentActivity } from './RecentActivity'
import RecentActivityData from './RecentActivityData'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const CompanyDashboard = () => {
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
                <div class="dashboard-section user-statistic-block">
                  <div class="user-statistic">
                    <i data-feather="command"></i>
                    <h3>06</h3>
                    <span>Total Job Posted</span>
                  </div>
                  <div class="user-statistic">
                    <i data-feather="file-text"></i>
                    <h3>123</h3>
                    <span>Application Submit</span>
                  </div>
                  <div class="user-statistic">
                    <i data-feather="users"></i>
                    <h3>32</h3>
                    <span>Call for interview</span>
                  </div>
                </div>
                <div class="dashboard-section dashboard-view-chart">
                  <canvas id="view-chart" width="400" height="200"></canvas>
                </div>
                <div class="dashboard-section dashboard-recent-activity">
                  <h4 class="title">Recent Activity</h4>
                
                {
                    RecentActivityData.map(data=>{
                        return(
                        <RecentActivity
                        title={data.title}
                        activitytime={data.time}
                        />
                        );
                    })
                }
                 
                </div>
              </div>
              
              <Router>
              <CompanySidebar/>
        <Switch>
          <Route path="/" exact component={CompanyDashboard} />
          <Route path="/editprofile" exact component={CompanyEditProfile} />
          <Route path="/managejobs" exact component={CompanyManageJobs} />
          <Route path="/postjobs" exact component={CompanyPostJobs} />
        </Switch>
      </Router>
            </div>
          </div>
        </div>
      </div>
    </div>


        </div>
    )
}
