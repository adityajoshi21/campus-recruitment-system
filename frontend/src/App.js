import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import Registration from './pages/RegisterLogin/Registration';
import Login from './pages/RegisterLogin/Login';
import JobDetails from './pages/JobDetails/JobDetails';
import { CompanyDashboard } from './pages/CompanyPages/CompanyDashboard';
import { CompanyEditProfile } from './pages/CompanyPages/CompanyEditProfile';
import { CompanyDetails } from './pages/CompanyDetails';
//import Registration from './pages/Registration'

/*eslint-disable */
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<main className="py-3">
						<Route path="/" component={Homepage} exact />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Registration} />
						<Route path="/companyDashboard" component={CompanyDashboard} />
						<Route path="/job/:jobId" component={JobDetails} />
						<Route path="/company/editProfile" component={CompanyEditProfile} />
						<Route path="/company/:companyId" component={CompanyDetails} />
					</main>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
