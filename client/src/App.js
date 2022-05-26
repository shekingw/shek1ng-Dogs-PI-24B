// import './App.css';
// import './components/LandingPage/LandingPage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import DogDetail from './components/DogDetail/DogDetail.jsx';
import Nav from './components/NavBar/NavBar';
import { DogCreate } from './components/DogCreate/DogCreate.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Temperaments from './components/Temperaments/Temperaments.jsx';
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/dogs/:id" element={<DogDetail />} />
					<Route exact path="/dogs/create" element={<DogCreate />} />
					<Route exact path="/temperaments" element={<Temperaments />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
