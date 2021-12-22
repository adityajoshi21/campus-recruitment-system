import React from 'react';
import moment from 'moment';

const Details = (props) => {
	const userData = JSON.parse(localStorage.getItem('userInfo'));

	return (
		<>
			<div className="alice-bg padding-top-60 section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="job-listing-details">
								<div className="job-title-and-info">
									<div className="title">
										<div className="thumb">
											<img
												src={props.companyImage}
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="title-body">
											<h4>{props.JobTitle}</h4>
											<div className="info">
												<span className="company">
													<a href="#">
														<i data-feather="briefcase"></i>
														{props.company}
													</a>
												</span>
												<span className="office-location">
													<a href="#">
														<i data-feather="map-pin"></i>
														{props.location}
													</a>
												</span>
												<span className="job-type full-time">
													<a href="#">
														<i data-feather="clock"></i>
														{props.JobType}
													</a>
												</span>
											</div>
										</div>
									</div>
									{userData.role == 'Student' && (
										<div className="buttons">
											<button
												className="apply"
												data-toggle="modal"
												data-target="#apply-popup-id"
												disabled={!props.eligible}
												style={{ background: !props.eligible && '#808080' }}>
												Apply Online
											</button>
										</div>
									)}
								</div>
								<div className="details-information section-padding-60">
									<div className="row">
										<div className="col-xl-7 col-lg-8">
											<div className="description details-section">
												<h4>
													<i data-feather="align-left"></i>Job Description
												</h4>
												<p>{props.Des1}</p>
											</div>
											<div className="responsibilities details-section">
												<h4>
													<i data-feather="zap"></i>Responsibilities
												</h4>
												<p>{props.responsibility}</p>
											</div>
											<div className="edication-and-experience details-section">
												<h4>
													<i data-feather="book"></i>Open For
												</h4>
												<ul>
													{props.openFor.map((o) => (
														<li>{o}</li>
													))}
												</ul>
											</div>

											<div className="row">
												<div className="col-xl-7 col-lg-8">
													<div className="company-information details-section">
														<h4>
															<i data-feather="briefcase"></i>About the Company
														</h4>
														<ul>
															<li>
																<span>Company Name:</span> {props.company}
															</li>
															<li>
																<span>Address:</span> {props.companyLocation}
															</li>
															<li>
																<span>Company Profile:</span>
															</li>
															<li>{props.companyDetails}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 offset-xl-1 col-lg-4">
											<div className="information-and-share">
												<div className="job-summary">
													<h4>Job Summary</h4>
													<ul>
														<li>
															<span>Job Location:</span> {props.location}
														</li>
														<li>
															<span>Salary:</span> {props.salary}
														</li>
														<li>
															<span>Gender:</span> Any
														</li>
														<li>
															<span>Application Deadline:</span>{' '}
															{moment(props.ApplyDeadline).format(
																'MMM Do, YYYY'
															)}
														</li>
														<li>
															<span>Bond Details:</span> {props.bondDetails}
														</li>
														<li>
															<span>Category:</span> {props.category}
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
				</div>
			</div>
			<div className="apply-popup">
				<div
					className="modal fade"
					id="apply-popup-id"
					tabindex="-1"
					role="dialog"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									<i data-feather="edit"></i>APPLY FOR THIS JOB
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form action="#">
									<div className="form-group">
										<input
											type="text"
											placeholder="Full Name"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											placeholder="Email Address"
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<textarea
											className="form-control"
											placeholder="Message"></textarea>
									</div>
									<div className="form-group file-input-wrap">
										<label for="up-cv">
											<input id="up-cv" type="file" />
											<i data-feather="upload-cloud"></i>
											<span>
												Upload your resume <span>(pdf,zip,doc,docx)</span>
											</span>
										</label>
									</div>
									<div className="more-option">
										<input
											className="custom-radio"
											type="checkbox"
											id="radio-4"
											name="termsandcondition"
										/>
										<label for="radio-4">
											<span className="dot"></span> I accept the{' '}
											<a href="#">terms & conditions</a>
										</label>
									</div>
									<button className="button primary-bg btn-block">
										Apply Now
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
