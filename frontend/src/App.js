import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginRegNav from './pages/LoginRegNav';
/*eslint-disable */
function App() {
	return (
		<div>
			<HomePage></HomePage>
			<Router>
				<main className="py-3">
					<Route path="/" component={HomePage} />
				</main>
			</Router>
		</div>
	);
}

export default App;
