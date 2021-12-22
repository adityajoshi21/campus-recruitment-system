import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

const Listing = (props) => {
	return (
		<div class="job-list">
			<div class="thumb">
				<a href="#">
					<img src={props.image} class="img-fluid" alt="" />
				</a>
			</div>
			<div class="body">
				<div class="content">
					<h4>
						<a href="job-details.html">{props.JobTitle}</a>
					</h4>
					<div class="info">
						<span class="company">
							<a href="#">
								<FontAwesomeIcon icon={faSearch} />
								{props.company}
							</a>
						</span>
						<span class="office-location">
							<a href="#">
								<i data-feather="map-pin"></i>
								{props.city}
							</a>
						</span>
						<span class="job-type full-time">
							<a href="#">
								<i data-feather="clock"></i>
								{props.type}
							</a>
						</span>
					</div>
				</div>
				<div class="more">
					<div class="buttons">
						<a
							href="#"
							class="button"
							data-toggle="modal"
							data-target="#apply-popup-id">
							Apply Now
						</a>
						<a href="#" class="favourite">
							<i data-feather="heart"></i>
						</a>
					</div>
					<p class="deadline">{props.deadline}</p>
				</div>
			</div>
		</div>
	);
};

export default Listing;
