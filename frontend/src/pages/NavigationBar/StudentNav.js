import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import Common from './Common';
const StudentNav = () => {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<div>
			<header className="header-2">
				<div className="container">
					<div className="row">
						<div className="col">
							<Common></Common>
							<nav className="navbar navbar-expand-lg cp-nav-2">
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent">
									<ul className="navbar-nav">
										<li className="menu-item active">
											<a title="Home" href="home-1.html">
												Home
											</a>
										</li>
										<li className="menu-item">
											<a href="#">Jobs</a>
										</li>
										<li className="menu-item">
											<a href="#">Manage Resume</a>
										</li>
										<li className="menu-item">
											<a href="#">Contact Us</a>
										</li>
										<li className="menu-item post-job">
											<a href="#">Apply for Job</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default StudentNav;
