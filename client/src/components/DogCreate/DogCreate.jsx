import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postDogs, getTemperament } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../assets/no_image.png';
import Nav from '../NavBar/NavBar';
import './DogCreate.css';
import flecha from './flecha.png';

function validate(input) {
	let errors = {};
	if (!input.name || input.name[0].includes(' ')) {
		errors.name = 'Se requiere indicar un nombre.';
	}
	if (input.height > 150) {
		errors.height = 'Se requiere indicar una altura maxima de 150 o menos.';
	}
	if (!input.height) {
		errors.height = 'Se requiere indicar la altura.';
	}
	if (input.weight > 200) {
		errors.weight = 'Se requiere indicar un peso maximo de 200 o menos.';
	}
	if (!input.weight) {
		errors.weight = 'Se requiere indicar el peso.';
	}

	if (input.life_span > 25) {
		errors.life_span = 'La esperanza de vida no puede superar los 20 años.';
	}

	if (!input.life_span) {
		errors.life_span = 'Se requiere indicar la esperanza de vida.';
	}
	return errors;
}
export function DogCreate() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const temperaments = useSelector((state) => state.temperaments);
	const [errors, setErrors] = useState({});

	const [input, setInput] = useState({
		name: '',
		height: '',
		weight: '',
		image: '',
		life_span: '',
		temperament: [],
	});

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			}),
		);
	}

	function handleSelect(e) {
		setInput({
			...input,
			temperament: [...input.temperament, e.target.value],
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (input.image === '') {
			input.image = defaultImg;
		}
		dispatch(postDogs(input));
		alert('Dog creado con exito');
		setInput({
			name: '',
			height: '',
			weight: '',
			life_span: '',
			temperament: [],
			image: '',
		});
		navigate('/home');
	}
	useEffect(() => {
		dispatch(getTemperament());
	}, []);

	return (
		<div className="createContainer">
			<Nav />
			<Link to="/home" className="volverBtn" style={{ textDecoration: 'none' }}>
				<img src={flecha} alt="flecha2" />
			</Link>
			<h1 className="createTitle">🐶Crea tu DOG🐶</h1>
			<form onSubmit={(e) => handleSubmit(e)} className="createForm">
				<div className="inputContainer">
					<div className="createName">
						<label>Nombre: </label>
						<input
							type="text"
							value={input.name}
							name="name"
							onChange={(e) => handleChange(e)}
							pattern="[a-zA-Z ]{2,50}"
							required={true}
						/>
						{errors.name && <p>{errors.name}</p>}
					</div>
					<div className="createAltura">
						<label>Altura (metrico): </label>
						<input
							type="number"
							value={input.height}
							name="height"
							onChange={(e) => handleChange(e)}
							required={true}
						/>
						{errors.height && <p>{errors.height}</p>}
					</div>
					<div className="createPeso">
						<label>Peso (metrico): </label>
						<input
							type="number"
							value={input.weight}
							name="weight"
							onChange={(e) => handleChange(e)}
							required={true}
						/>
						{errors.weight && <p>{errors.weight}</p>}
					</div>
					<div className="createLifeSpan">
						<label>Esperanza de vida: </label>
						<input
							type="number"
							value={input.life_span}
							name="life_span"
							onChange={(e) => handleChange(e)}
							required={true}
						/>
						{errors.life_span && <p>{errors.life_span}</p>}
					</div>
					<div className="createImagen">
						<label>Imagen (URL): </label>
						<input
							value={input.image}
							name="image"
							pattern="https?://[\w-]+(.[\w-]+)+[/#?]?.*$"
							placeholder="Imagen URL"
							onChange={(e) => handleChange(e)}
						/>
						{errors.image && <p>{errors.image}</p>}
					</div>
					<div className="createTemperaments">
						<label className="Temp2">Temperamentos: </label>
						<select
							className=""
							onChange={(e) => handleSelect(e)}
							defaultValue="default"
						>
							<option value="default" disabled>
								Temperamentos
							</option>
							{temperaments.map((temp) => (
								<option key={temp.name} value={temp.name}>
									{temp.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div>
					<ul className="temperamentos">
						<li>
							Temperamentos Fijados: {input.temperament.map((el) => el + ', ')}
						</li>
					</ul>
				</div>
				<button
					type="submit"
					disabled={
						!input.name || errors.name || errors.life_span ? true : false
					}
					className="crearBtn"
				>
					Crear
				</button>
			</form>
		</div>
	);
}
