import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage'
import Registration from './pages/RegisterLogin/Registration';
import Login from './pages/RegisterLogin/Login'
import JobDetails from './pages/JobDetails/JobDetails'
//import Registration from './pages/Registration'



/*eslint-disable */
function App() {
    return (
        <div>

            <Router>
                <Switch>
                <main className="py-3">

                    <Route path="/"
                        component={Homepage} exact/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Registration}/>
                </main>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
