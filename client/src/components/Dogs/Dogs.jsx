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
			<div>
				<select onChange={(e) => handleFilterTemperament(e)}>
					<option value="all">All</option>
					{allTemperaments?.map((t) => (
						<option key={t.name} value={t.name}>
							{t.name}
						</option>
					))}
				</select>
				{/* FILTRO POR DOG CREADO */}
				<select onChange={(e) => handleFilterDogByCreated(e)}>
					<option value="all">All</option>
					<option value="api">API</option>
					<option value="created">Created</option>
				</select>
				{/* FILTRO POR ASCENDENT O DESCENDENT */}
				<select onChange={(e) => handleSort(e)}>
					<option value="asc">A-Z</option>
					<option value="desc">Z-A</option>
				</select>
				{/* FILTRO POR GRANDE O PEQUEÑO */}
				<select onChange={(e) => handleWeight(e)}>
					<option value="small">Pequeño</option>
					<option value="Big">Grande</option>
				</select>
			</div>
			<button onClick={(e) => handleClick(e)}>Mostrar todos</button>
			{/* MUESTRO LOS DOGS */}
			<ul>
				{allDogs.length ? (
					currentDogs.map((dog) => (
						<li key={dog.id}>
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
					<h3>Loading</h3>
				)}
				<Paginado
					dogsPerPage={dogsPerPage}
					allDogs={allDogs.length}
					paginado={paginado}
				/>
			</ul>
		</div>
	);
}
