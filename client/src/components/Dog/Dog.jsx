import React from 'react';
import { Link } from 'react-router-dom';

export default function Dog({ image, name, temperament, weight, id }) {
	return (
		<div>
			<Link to={`/dogs/${id}`}>
				<h3>{name}</h3>
			</Link>
			<h5>Temperamento: {temperament}</h5>
			<h5>Peso: {weight} kg</h5>
			<img src={image} alt="imageDog" width="200px" height="200px" />
		</div>
	);
}
