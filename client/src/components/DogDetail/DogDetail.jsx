import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDog, getDogById } from '../../actions';
import Nav from '../NavBar/NavBar';
import loadingGif from '../../assets/loadingGif.gif';
import './DogDetail.css';
import flecha from '../DogCreate/flecha.png';

export default function DogDetail(props) {
	const dispatch = useDispatch();
	const dog = useSelector((state) => state.dog);
	const navigate = useNavigate();
	let { id } = useParams();
	useEffect(() => {
		dispatch(getDogById(id));
		return () => dispatch(clearDog());
	}, []);

	useEffect(() => {
		if (Object.keys(dog).length > 0) {
			if (dog.hasOwnProperty('msg')) {
				navigate('/*');
			}
		}
	}, [dog]);

	return (
		<div className="containerDetail">
			<Nav />
			<Link to="/home">
				<img src={flecha} className="volverFlecha" alt="volver" />
			</Link>
			<h1 className="detailTitle">Detalles de Raza</h1>
			{dog.name ? (
				<>
					<h2>
						<u>{dog.name}</u>
					</h2>
					<h4>Temperamento: {dog.temperament}</h4>
					<h4>Esperanza de vida: {dog.life_span}</h4>
					<h4>Peso: {dog.weight}</h4>
					<h4>Altura: {dog.height} cm</h4>
					<img className="detailImg" src={dog.image} alt="dogimage" />
				</>
			) : (
				<div className="detailLoading">
					<img src={loadingGif} alt="loading" />
				</div>
			)}
		</div>
	);
}
