import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddResume from './pages/AddResume';
import CandidateDashboard from './pages/CandidateDashboard';
import CandidateDetails from './pages/CandidateDetails';
import CompanyDetails from './pages/CompanyDetails';
import HomePage from './pages/HomePage';
import JobDetails from './pages/JobDetails';
import JobListing from './pages/JobListing';
import CandidateList from './pages/CandidateList';
import StudentNav from './pages/StudentNav';
import CompanyNav from './pages/CompanyNav';
//import Registration from './pages/Registration'



/*eslint-disable */
function App() {
    return (
        <div>

            <Router>

                <main className="py-3">

                    <Route path="/"
                        component={CompanyNav}/>

                </main>
            </Router>
        </div>
    );
}

export default App;
