import React from "react";
import CandidateListingComponent from "./CandidateListingComponent";
import CandidateListingData from "./CandidateListingData";
import CompanyNav from "./CompanyPages/CompanyNav";
const CandidateList = () => {
  return (
    <div>
     <CompanyNav/>

      <div className="alice-bg padding-top-70 padding-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="breadcrumb-area">
                <h1>Candidates List</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Candidates List
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-md-6">
              <div className="breadcrumb-form">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button>
                    <i data-feather="search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alice-bg section-padding-bottom">
        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <div className="candidate-container">
                <div className="filtered-candidate-wrapper">
                  <div className="candidate-view-controller-wrapper">
                    <div className="candidate-view-controller">
                      <div className="controller list active">
                        <i data-feather="menu"></i>
                      </div>
                      <div className="controller grid">
                        <i data-feather="grid"></i>
                      </div>
                      <div className="candidate-view-filter">
                        <select className="selectpicker">
                          <option value="" selected>
                            Most Recent
                          </option>
                          <option value="california">Top Rated</option>
                          <option value="las-vegas">Most Popular</option>
                        </select>
                      </div>
                    </div>
                    <div className="showing-number">
                      <span>Showing 1–12 of 28 Jobs</span>
                    </div>
                  </div>

                  {CandidateListingData.map((data) => {
                    return(
                    <CandidateListingComponent
                      img={data.img}
                      name={data.name}
                      position={data.position}
                      city={data.city}
                    />);
                  })}

                  <div className="pagination-list text-center">
                    <nav className="navigation pagination">
                      <div className="nav-links">
                        <a className="prev page-numbers" href="#">
                          <i className="fas fa-angle-left"></i>
                        </a>
                        <a className="page-numbers" href="#">
                          1
                        </a>
                        <span
                          aria-current="page"
                          className="page-numbers current"
                        >
                          2
                        </span>
                        <a className="page-numbers" href="#">
                          3
                        </a>
                        <a className="page-numbers" href="#">
                          4
                        </a>
                        <a className="next page-numbers" href="#">
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="candidate-filter-wrapper">
                  <div className="selected-options same-pad">
                    <div className="selection-title">
                      <h4>You Selected</h4>
                      <a href="#">Clear All</a>
                    </div>
                    <ul className="filtered-options"></ul>
                  </div>
                  <div className="candidate-filter-dropdown same-pad category">
                    <select className="selectpicker">
                      <option value="" selected>
                        Category
                      </option>
                      <option value="california">Accounting / Finance</option>
                      <option value="california">Education</option>
                      <option value="california">Design &amp; Creative</option>
                      <option value="california">Health Care</option>
                      <option value="california">
                        Engineer &amp; Architects
                      </option>
                      <option value="california">Marketing &amp; Sales</option>
                      <option value="california">Garments / Textile</option>
                      <option value="california">Customer Support</option>
                      <option value="california">Digital Media</option>
                      <option value="california">Telecommunication</option>
                    </select>
                  </div>
                  <div className="candidate-filter-dropdown same-pad location">
                    <select className="selectpicker">
                      <option value="" selected>
                        Location
                      </option>
                      <option value="california">Chicago</option>
                      <option value="california">New York City</option>
                      <option value="california">San Francisco</option>
                      <option value="california">Washington</option>
                      <option value="california">Boston</option>
                      <option value="california">Los Angeles</option>
                      <option value="california">Seattle</option>
                      <option value="california">Las Vegas</option>
                      <option value="california">San Diego</option>
                    </select>
                  </div>
                  <div
                    data-id="candidate-type"
                    className="candidate-filter same-pad candidate-type"
                  >
                    <h4 className="option-title">Job Type</h4>
                    <ul>
                      <li className="full-time">
                        <i data-feather="clock"></i>
                        <a href="#" data-attr="Full Time">
                          Full Time
                        </a>
                      </li>
                      <li className="part-time">
                        <i data-feather="clock"></i>
                        <a href="#" data-attr="Part Time">
                          Part Time
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-id="experience"
                    className="candidate-filter same-pad experience"
                  >
                    <h4 className="option-title">Experience</h4>
                    <ul>
                      <li>
                        <a href="#" data-attr="Fresh">
                          Fresh
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="Less than 1 year">
                          Less than 1 year
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="2 Year">
                          2 Year
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="3 Year">
                          3 Year
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="candidate-filter same-pad">
                    <h4 className="option-title">Salary Range</h4>
                    <div className="price-range-slider">
                      <div
                        className="nstSlider"
                        data-range_min="0"
                        data-range_max="10000"
                        data-cur_min="0"
                        data-cur_max="6130"
                      >
                        <div className="bar"></div>
                        <div className="leftGrip"></div>
                        <div className="rightGrip"></div>
                        <div className="grip-label">
                          <span className="leftLabel"></span>
                          <span className="rightLabel"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-id="gender"
                    className="candidate-filter same-pad gender"
                  >
                    <h4 className="option-title">Gender</h4>
                    <ul>
                      <li>
                        <a href="#" data-attr="Male">
                          Male
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="Female">
                          Female
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-id="qualification"
                    className="candidate-filter same-pad qualification"
                  >
                    <h4 className="option-title">Qualification</h4>
                    <ul>
                      <li>
                        <a href="#" data-attr="Matriculation">
                          Matriculation
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="Intermidiate">
                          Intermidiate
                        </a>
                      </li>
                      <li>
                        <a href="#" data-attr="Gradute">
                          Graduate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CandidateList;
