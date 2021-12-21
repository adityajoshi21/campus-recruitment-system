import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage'
import Registration from './pages/RegisterLogin/Registration';
import Login from './pages/RegisterLogin/Login'
//import Registration from './pages/Registration'



/*eslint-disable */
function App() {
    return (
        <div>

            <Router>

                <main className="py-3">

                    <Route path="/"
                        component={Homepage}/>

                </main>
            </Router>
        </div>
    );
}

export default App;
