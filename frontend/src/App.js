import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Registration from './pages/Registration'

/*eslint-disable */
function App() {
    return (
        <div>

            <Router>

                <main className="py-3">

                    <Route path="/"
                        component={HomePage}/>

                </main>
            </Router>
        </div>
    );
}

export default App;
