import React from 'react';
import { CompanyOpenJobs } from './CompanyOpenJobs';
import StudentNav from './NavigationBar/StudentNav';
import CompanyOJData from './CompanyOJData';
export const CompanyDetails = () => {
	return (
		<div>
			<StudentNav />

			<div className="alice-bg padding-top-60 section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="company-details">
								<div className="title-and-info">
									<div className="title">
										<div className="thumb">
											<img
												src="images/company/company-logo-1.png"
												className="img-fluid"
												alt=""
											/>
										</div>
										<div className="title-body">
											<h4>Theoreo Digital LTD</h4>
											<div className="info">
												<span className="company-type">
													<i data-feather="briefcase"></i>Software Firm
												</span>
												<span className="office-location">
													<i data-feather="map-pin"></i>Los Angeles
												</span>
											</div>
										</div>
									</div>
									<div className="download-resume">
										<a href="#" className="save-btn">
											<i data-feather="heart"></i>Save
										</a>
										<a href="#">4 Open Positions</a>
									</div>
								</div>
								<div className="details-information padding-top-60">
									<div className="row">
										<div className="col-xl-7 col-lg-8">
											<div className="about-details details-section">
												<h4>
													<i data-feather="align-left"></i>About Us
												</h4>
												<p>
													Combined with a handful of model sentence structures,
													to generate lorem Ipsum which It has survived not only
													five centuries, but also the leap into electronic
													typesetting, remaining essentially unchanged. It was
													popularised in the 1960s with the release of Letraset
													sheets containing Lorem Ipsum passages, and more
													recently with desktop publishing software like Aldus
													PageMaker including.
												</p>
												<p>
													Richard McClintock, a Latin professor at
													Hampden-Sydney College in Virginia, looked up one of
													the more obscure Latin words, consectetur, from a
													Lorem Ipsum passage, and going through the cites of
													the word in classNameical literature, discovered the
													undoubtable{' '}
												</p>
											</div>
											<div className="intor-video details-section">
												<h4>
													<i data-feather="video"></i>Intro Video
												</h4>
												<div className="video-area">
													<div
														id="player"
														data-plyr-provider="vimeo"
														data-plyr-embed-id="126777001"></div>
												</div>
											</div>
											<div className="portfolio details-section">
												<h4>
													<i data-feather="grid"></i>Image Gallery
												</h4>
												<div className="portfolio-slider owl-carousel">
													<div className="portfolio-item">
														<img
															src="images/portfolio/thumb-3.jpg"
															className="img-fluid"
															alt=""
														/>
														<div className="overlay">
															<a href="#">
																<i data-feather="eye"></i>
															</a>
															<a href="#">
																<i data-feather="link"></i>
															</a>
														</div>
													</div>
													<div className="portfolio-item">
														<img
															src="images/portfolio/thumb-1.jpg"
															className="img-fluid"
															alt=""
														/>
														<div className="overlay">
															<a href="#">
																<i data-feather="eye"></i>
															</a>
															<a href="#">
																<i data-feather="link"></i>
															</a>
														</div>
													</div>
													<div className="portfolio-item">
														<img
															src="images/portfolio/thumb-2.jpg"
															className="img-fluid"
															alt=""
														/>
														<div className="overlay">
															<a href="#">
																<i data-feather="eye"></i>
															</a>
															<a href="#">
																<i data-feather="link"></i>
															</a>
														</div>
													</div>
													<div className="portfolio-item">
														<img
															src="images/portfolio/thumb-3.jpg"
															className="img-fluid"
															alt=""
														/>
														<div className="overlay">
															<a href="#">
																<i data-feather="eye"></i>
															</a>
															<a href="#">
																<i data-feather="link"></i>
															</a>
														</div>
													</div>
													<div className="portfolio-item">
														<img
															src="images/portfolio/thumb-2.jpg"
															className="img-fluid"
															alt=""
														/>
														<div className="overlay">
															<a href="#">
																<i data-feather="eye"></i>
															</a>
															<a href="#">
																<i data-feather="link"></i>
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="open-job details-section">
												<h4>
													<i data-feather="check-circle"></i>Open Job
												</h4>
												{CompanyOJData.map((data) => {
													return (
														<div>
															<CompanyOpenJobs
																JobDetail={data.JobTitle}
																location={data.location}
																type={data.type}
																deadline={data.deadline}
															/>
														</div>
													);
												})}
											</div>
										</div>
										<div className="col-xl-4 offset-xl-1 col-lg-4">
											<div className="information-and-contact">
												<div className="information">
													<h4>Information</h4>
													<ul>
														<li>
															<span>Category:</span> Design & Creative
														</li>
														<li>
															<span>Location:</span> Los Angeles
														</li>

														<li>
															<span>Email:</span> theoreodigital@hotmail.com
														</li>
														<li>
															<span>Company Size:</span> 20-50
														</li>
														<li>
															<span>Website:</span>{' '}
															<a href="#">www.theoreodigital.com</a>
														</li>
													</ul>
												</div>
												<div className="buttons">
													<a
														href="#"
														className="button contact-button"
														data-toggle="modal"
														data-target="#exampleModal">
														Contact Us
													</a>
												</div>

												<div
													className="modal fade contact-form-modal"
													id="exampleModal"
													tabindex="-1"
													role="dialog"
													aria-hidden="true">
													<div className="modal-dialog" role="document">
														<div className="modal-content">
															<div className="modal-body">
																<h4>
																	<i data-feather="edit"></i>Contact Us
																</h4>
																<form action="#">
																	<div className="form-group">
																		<input
																			type="text"
																			className="form-control"
																			placeholder="Your Name"
																		/>
																	</div>
																	<div className="form-group">
																		<input
																			type="email"
																			className="form-control"
																			placeholder="Your Email"
																		/>
																	</div>
																	<div className="form-group">
																		<textarea
																			className="form-control"
																			placeholder="Your Message"></textarea>
																	</div>
																	<button className="button">Submit</button>
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
			</div>
		</div>
	);
};
