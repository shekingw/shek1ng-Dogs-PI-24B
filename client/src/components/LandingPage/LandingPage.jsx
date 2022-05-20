import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTemperament } from '../../actions';
import './LandingPage.css';

export default function LandingPage() {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getTemperament()), [dispatch]);
	return (
		<div className="divLanding">
			<h1>Bienvenidos a Henry Dogs</h1>
			<Link to="/home">Ingresar</Link>
		</div>
	);
}
