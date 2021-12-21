import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddResume from './pages/Resume/AddResume';
import CandidateDashboard from './pages/CandidateDashboard';
import CandidateDetails from './pages/CandidateDetails';
import CandidateList from './pages/CandidateList';
import { CompanyDashboard } from './pages/CompanyPages/CompanyDashboard';
import CompanyDetails from './pages/CompanyDetails';
import HomePage from './pages/HomePage/HomePage';
import JobDetails from './pages/JobDetails/JobDetails';
import JobListing from './pages/JobListing';
import { CompanyEditProfile } from './pages/CompanyPages/CompanyEditProfile';
import { CompanyManageJobs } from './pages/CompanyPages/CompanyManageJobs';
import { CompanyPostJobs } from './pages/CompanyPages/CompanyPostJobs';
import Registration from './pages/RegisterLogin/Registration';

//import Registration from './pages/Registration'



/*eslint-disable */
function App() {
    return (
        <div>

            <Router>

                <main className="py-3">

                    <Route path="/"
                        component={JobDetails}/>

                </main>
            </Router>
        </div>
    );
}

export default App;
