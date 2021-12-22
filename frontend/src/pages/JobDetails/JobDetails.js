import React,{ useState, useEffect } from 'react'
import RecentJobsData from '../HomePage/RecentJobsData';
import Listing from '../HomePage/Listing';
import StudentNav from '../NavigationBar/StudentNav';
import Details from './Details';
 const JobDetails = () => {

  const [data,setData]=useState([]);
  const [filter,setFilter]=useState(data);
  let componentMounted=true;

  useEffect(() => {
    const getJobDescription=async()=>{
      const response=await fetch("/api/job/61c184311097d843d4b2cca9");
      if(componentMounted)
      {
        setData(await response.clone().json());
        setFilter(await response.json());

      }
      return ()=>{
        componentMounted=false;
      }
    }
    getJobDescription();
  }, [])
  console.log(filter);

    return (
        <div>
          
      <StudentNav />

      <Details
        
        JobTitle={filter.title}
       
        JobType={filter.offerType}
        Des1={filter.description}
        res1={filter.responsibility}

        Edu1={filter.openFor}
        company={filter.company}
        address={filter.location}
        description={filter.description}


        location={filter.location}
        salary={filter.package}
        ApplyDeadline={filter.ApplyDeadline}
       />
    

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