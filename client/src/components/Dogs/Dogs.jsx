import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getDogs,
	getTemperament,
	orderByName,
	orderByWeight,
} from '../../actions';
import Dog from '../Dog/Dog.jsx';
import Paginado from '../Paginado/Paginado.jsx';
import { filterTemperament, filterCreated } from '../../actions';
import './Dogs.css';
import '../Paginado/Paginado.css';
import loadingGif from '../../assets/loadingGif.gif';

export default function Dogs() {
	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.dogs);
	const allTemperaments = useSelector((state) => state.temperaments);
	const [orden, setOrden] = useState('');
	const [peso, setPeso] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [dogsPerPage, setDogsPerPage] = useState(8);
	const indexOfLastDogs = currentPage * dogsPerPage;
	const indexOfFirstDogs = indexOfLastDogs - dogsPerPage;
	const currentDogs = allDogs.slice(indexOfFirstDogs, indexOfLastDogs);

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getDogs());
		dispatch(getTemperament());
	}, []);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getDogs());
	}

	function handleFilterTemperament(e) {
		dispatch(filterTemperament(e.target.value));
	}

	function handleFilterDogByCreated(e) {
		dispatch(filterCreated(e.target.value));
	}

	function handleSort(e) {
		e.preventDefault();
		dispatch(orderByName(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	function handleWeight(e) {
		e.preventDefault();
		dispatch(orderByWeight(e.target.value));
		setCurrentPage(1);
		setPeso(`Ordenado ${e.target.value}`);
	}

	return (
		<div>
			{/* FILTRO POR TEMPERAMENTO */}
			<div className="dogsSelects">
				<select
					onChange={(e) => handleFilterTemperament(e)}
					defaultValue="default"
				>
					<option disabled value="default">
						Temperamento
					</option>
					<option value="all">All</option>
					{allTemperaments?.map((t) => (
						<option key={t.name} value={t.name}>
							{t.name}
						</option>
					))}
				</select>
				{/* FILTRO POR DOG CREADO */}
				<select
					onChange={(e) => handleFilterDogByCreated(e)}
					defaultValue="default"
				>
					<option disabled value="default">
						Filtrar por Dogs
					</option>
					<option value="all">Todos</option>
					<option value="api">API</option>
					<option value="created">Creados</option>
				</select>
				{/* FILTRO POR ASCENDENT O DESCENDENT */}
				<select onChange={(e) => handleSort(e)} defaultValue="default">
					<option disabled value="default">
						Alfabeticamente
					</option>
					<option value="asc">A-Z</option>
					<option value="desc">Z-A</option>
				</select>
				{/* FILTRO POR GRANDE O PEQUEÑO */}
				<select onChange={(e) => handleWeight(e)} defaultValue="default">
					<option disabled value="default">
						Tamaño
					</option>
					<option value="small">Pequeño</option>
					<option value="Big">Grande</option>
				</select>
			</div>
			<div className="dogsDivBtn">
				<button className="dogsBtn" onClick={(e) => handleClick(e)}>
					Mostrar todos
				</button>
			</div>
			{/* MUESTRO LOS DOGS */}
			<div className="divDogs">
				<ul className="dogsUl">
					{allDogs.length ? (
						currentDogs.map((dog) => (
							<li className="dogsLi" key={dog.id}>
								<Dog
									name={dog.name}
									temperament={dog.temperament}
									image={dog.image}
									weight={dog.weight}
									id={dog.id}
									createdInDb={dog.createdInDb}
								/>
							</li>
						))
					) : (
						<div className="loadingGif">
							<img src={loadingGif} />
						</div>
					)}
				</ul>
			</div>
			<div className="containerPaginado">
				<Paginado
					dogsPerPage={dogsPerPage}
					allDogs={allDogs.length}
					paginado={paginado}
				/>
			</div>
		</div>
	);
}
