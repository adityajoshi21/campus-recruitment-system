import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

const Common = () => {
	const dispatch = useDispatch();
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<div className="header-top">
			<div className="logo-area">
				<a href="index.html">
					<img src="images/logoCRS.png" alt="" />
				</a>
			</div>
			<div className="header-top-toggler">
				<div className="header-top-toggler-button"></div>
			</div>
			<div className="top-nav">
				<div className="dropdown header-top-notification">
					<a href="#" className="notification-button">
						Notification
					</a>
				</div>
				<div className="dropdown header-top-account">
					<a href="#" className="account-button">
						My Account
					</a>
				</div>
				<div>
					<button onClick={logoutHandler}>
						<img src="/images/Exit.png" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Common;
