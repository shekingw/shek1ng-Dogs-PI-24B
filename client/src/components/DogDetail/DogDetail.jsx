import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogById } from '../../actions';
import Nav from '../NavBar/NavBar';

export default function DogDetail(props) {
	const dispatch = useDispatch();
	const dog = useSelector((state) => state.dog);
	let { id } = useParams();
	useEffect(() => {
		dispatch(getDogById(id));
	}, []);
	return (
		<div>
			<Nav />
			<h1>Detalles de Raza</h1>
			{dog.name ? (
				<>
					<h2>{dog.name}</h2>
					<h4>Temperamento: {dog.temperament}</h4>
					<h4>Esperanza de vida: {dog.life_span}</h4>
					<h4>Peso: {dog.weight}</h4>
					<h4>Altura: {dog.height} cm</h4>
					<img src={dog.image} alt="dogimage" />
				</>
			) : (
				<h3>Dog doesn't exist</h3>
			)}
		</div>
	);
}
