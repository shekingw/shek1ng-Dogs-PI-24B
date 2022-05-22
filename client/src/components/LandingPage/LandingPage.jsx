import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemperament } from '../../actions';
import './LandingPage.css';
import dogsAsoman from '../../assets/asoma_2.png';

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
				<img src={dogsAsoman} className="divImg" />
			</div>
		</div>
	);
}
