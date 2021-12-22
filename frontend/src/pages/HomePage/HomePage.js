/* eslint-disable */
import React,{ useState, useEffect } from 'react'
import RecentJobsData from "./RecentJobsData";
import Listing from "./Listing"
import StudentNav from "../NavigationBar/StudentNav"
import RCData from "./RCData";
import RecentCompanies from "./RecentCompanies";
const HomePage = () => {

  const [data,setData]=useState([]);
  const [filter,setFilter]=useState(data);
  let componentMounted=true;

  useEffect(() => {
    const getJobs=async()=>{
      const response=await fetch("/api/job/");
      if(componentMounted)
      {
        setData(await response.clone().json());
        setFilter(await response.json());

      }
      return ()=>{
        componentMounted=false;
      }
    }
    getJobs();
  }, [])



  return (
    <div>
     <StudentNav/>

   

  
    <div className="banner banner-3 banner-3-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-content">
              <h1>582 Job Listed</h1>
              <p>Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT) is a University established under an 
                  Act of Gujarat State Legislature and 
                  recognized by the University Grants Commission and Association of Indian Universities.
                   It is a university devoted to the Information and Communication Technology. Established by the Reliance Group, 
                   DA-IICT is widely seen as an institution 'with a difference' in terms of its academic programs, faculty profiles 
                   and overall ambience. In a short period of fifteen years, it is consistently ranked as one of the best technological
                   nstitutes in the country in the fields of computer science, electronics and communication engineering and 
                   information technology.<br/><br/>
                  DA-IICT offers a unique B. Tech. Program in Information and Communication Technology, B. Tech 
                  (ICT with minors in Computational Science) and four post-graduate programs - M.Tech. (ICT), M.Sc. (IT),
                   M.Sc. (ICT - ARD) and M.Des. (CD). The curriculum of theses programs are carefully designed in 
                   consultation with industry experts to ensure that they are relevant to industry and society. 
                   DA-IICT is also deeply committed to seeing its students as responsible citizens and its social 
                   science courses and the rural internship program are designed to give a strong sense of cultural 
                   roots and social questions to the students.<br/><br/>
                    The Placement Cell at DA-IICT works professionally with the Industry to explore opportunities for 
                    DA-IICT graduates for placements. The Cell makes its best efforts to reach out to all sub-sectors 
                    of the industry in order to ensure that DA-IICT graduates spread across the industry.</p>
              <a href="add-resume.html" className="button">Upload Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    


    <div className="searchAndFilter-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="searchAndFilter-block-3">
              <div className="searchAndFilter-3">
                <form action="#" className="search-form">
                  <div className="keyword">
                    <label>What?</label>
                    <input type="text" placeholder="Enter Your Keywords"/>
                  </div>
                  <div className="location-input">
                    <label>Where?</label>
                    <select className="selectpicker" id="search-location">
                      <option value="" selected>All Locations</option>
                      <option value="california">California</option>
                      <option value="las-vegas">Las Vegas</option>
                      <option value="new-work">New Work</option>
                      <option value="carolina">Carolina</option>
                      <option value="chicago">Chicago</option>
                      <option value="silicon-vally">Silicon Vally</option>
                      <option value="washington">Washington DC</option>
                      <option value="neveda">Neveda</option>
                    </select>
                  </div>
                  <div className="category-input">
                    <label>Category</label>
                    <select className="selectpicker" id="search-category">
                      <option value="" selected>All Categories</option>
                      <option value="real-state">Real State</option>
                      <option value="vehicales">Vehicales</option>
                      <option value="electronics">Electronics</option>
                      <option value="beauty">Beauty</option>
                      <option value="furnitures">Furnitures</option>
                    </select>
                  </div>
                  <button className="button primary-bg"><i className="fas fa-search"></i></button>
                </form>
               
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
            <div className="section-header section-header-2 section-header-with-right-content">
              <h2>Recent Jobs</h2>
              <a href="job-listing.html" className="header-right">+ Browse All Jobs</a>
            </div>
          </div>
        </div>
        {
          filter.map(recentJobdata=>{
            return(
              <Listing 
              image={recentJobdata.company.imageURL}
              JobTitle={recentJobdata.title}
              company={recentJobdata.company.name}
              city={recentJobdata.location}
              type={recentJobdata.offerType}
              deadline={recentJobdata.endDate}
              />
            );
          })
        }
      </div>
    </div>
 

    </div>
  );
};
export default HomePage;
