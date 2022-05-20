import './App.css';
// import './components/LandingPage/LandingPage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import DogDetail from './components/DogDetail/DogDetail.jsx';
import Nav from './components/NavBar/NavBar';
import { DogCreate } from './components/DogCreate/DogCreate.jsx';
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/dogs/:id" element={<DogDetail />} />
					<Route exact path="/dogs/create" element={<DogCreate />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
