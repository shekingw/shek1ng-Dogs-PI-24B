import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

export default function Dog({ image, name, temperament, weight, id }) {
	return (
		<div className="containerDog">
			<div className="divDog">
				<Link to={`/dogs/${id}`} style={{ textDecoration: 'none' }}>
					<h3>{name}</h3>
				</Link>
				<div className="contenidoDog">
					<h5>Temperamento: {temperament}</h5>
					<h5>Peso: {weight} kg</h5>
					<img src={image} alt="imageDog" width="200px" height="200px" />
				</div>
			</div>
		</div>
	);
}
