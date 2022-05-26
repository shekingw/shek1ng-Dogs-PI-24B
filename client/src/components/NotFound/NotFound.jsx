import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import image404 from '../../assets/404.png';
import Nav from '../NavBar/NavBar';
import { useEffect } from 'react';

const NotFound404 = () => {
	const navigate = useNavigate();

	function timer() {
		navigate('/home');
	}
	useEffect(() => {
		setTimeout(timer, 5000);
	}, []);
};

export default function NotFound() {
	return (
		<div className="container404">
			<div className="container-notFound">
				<Nav />
				<img src={image404} className="image404" alt="404" />
				<p>Seras redireccionado en 5 segundos..</p>
				{NotFound404()}
			</div>
		</div>
	);
}
