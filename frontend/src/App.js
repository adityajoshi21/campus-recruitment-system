import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddResume from './pages/AddResume';
import CandidateDashboard from './pages/CandidateDashboard';
import CandidateDetails from './pages/CandidateDetails';
import CompanyDetails from './pages/CompanyDetails';
import HomePage from './pages/HomePage/HomePage';
import JobDetails from './pages/JobDetails';
import JobListing from './pages/JobListing';

//import Registration from './pages/Registration'



/*eslint-disable */
function App() {
    return (
        <div>

            <Router>

                <main className="py-3">

                    <Route path="/"
                        component={CompanyDetails}/>

                </main>
            </Router>
        </div>
    );
}

export default App;
