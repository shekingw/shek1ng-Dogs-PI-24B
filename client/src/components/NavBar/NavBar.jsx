import { Link } from 'react-router-dom';
import icon from '../../assets/icon_dog.png';
import './NavBar.css';

export default function Nav() {
	return (
		<nav className="container">
			<div className="navDiv">
				<Link to="/home" className="container-icon">
					<img src={icon} className="navImg" alt="main icon" to="/home" />
				</Link>
				<h1 className="navTitle">Henry Dogs</h1>
				<ul className="navUl">
					<li className="link">
						<Link to="/home" style={{ textDecoration: 'none' }}>
							Dogs
						</Link>
					</li>
					<li className="link">
						<Link to="/dogs/create" style={{ textDecoration: 'none' }}>
							Create Dog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
