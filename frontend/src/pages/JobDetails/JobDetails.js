import React from 'react'
import RecentJobsData from '../HomePage/RecentJobsData';
import Listing from '../HomePage/Listing';
import StudentNav from '../StudentNav';
import Details from './Details';
 const JobDetails = () => {
    return (
        <div>
          
      <StudentNav />

      <Details />
    

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