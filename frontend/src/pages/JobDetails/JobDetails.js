import React, { useState, useEffect } from 'react';
import RecentJobsData from '../HomePage/RecentJobsData';
import Listing from '../HomePage/Listing';
import StudentNav from '../NavigationBar/StudentNav';
import Details from './Details';
import axios from 'axios';
const JobDetails = ({ match }) => {
	const [data, setData] = useState({});
	const jobId = match.params.jobId;

	useEffect(() => {
		const getJobDetails = async () => {
			const { data } = await axios.get('/api/job/' + jobId);
			data._id = String(data._id);
			setData(data);
		};

		getJobDetails();
	}, [jobId, setData]);

	return (
		<div>
			<StudentNav />

			{data.hasOwnProperty('title') && (
				<Details
					JobTitle={data.title}
					JobType={data.offerType}
					Des1={data.description}
					responsibility={data.responsibility}
					company={data.company.name}
					companyImage={data.company.imageURL}
					companyLocation={data.company.location}
					companyDetails={data.company.description}
					address={data.location}
					description={data.description}
					location={data.location}
					salary={data.package}
					ApplyDeadline={data.endDate}
					bondDetails={data.bondDetails}
					category={data.category}
					openFor={data.openFor}
					eligible={data.eligible}
				/>
			)}

			{/* <div className="section-padding-bottom alice-bg">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="section-header section-header-2 section-header-with-right-content">
								<h2>Simillar Jobs</h2>
								<a href="#" className="header-right">
									+ Browse All Jobs
								</a>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							{RecentJobsData.map((recentJobdata) => {
								return (
									<Listing
										image={recentJobdata.img}
										JobTitle={recentJobdata.JobTitle}
										company={recentJobdata.city}
										city={recentJobdata.city}
										type={recentJobdata.type}
										deadline={recentJobdata.deadline}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
export default JobDetails;
