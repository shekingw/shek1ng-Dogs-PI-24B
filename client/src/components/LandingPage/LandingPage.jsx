import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemperament } from '../../actions';
import './LandingPage.css';
import dogsAsoman from '../../assets/asoma_2.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

export default function LandingPage() {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getTemperament()), [dispatch]);
	return (
		<div className="divGeneral">
			<div className="divLanding">
				<h1 className="h1Div">
					Bienvenidos a Henry Dogs.<span>&#160;</span>
				</h1>
				<Link className="linkDiv" to="/home">
					Ingresar
				</Link>
				<img src={dogsAsoman} className="divImg" alt="asoma" />
			</div>
			<footer className="footer">
				<div className="container-footer">
					<div className="container-linkedin">
						<a href="https://www.linkedin.com/in/alan-otero-336687223/">
							<img src={linkedin} className="img-linkedin" alt="linkedin" />
						</a>
					</div>
					<div className="container-github">
						<a href="https://github.com/shek1ng">
							<img src={github} className="img-github" alt="github" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
