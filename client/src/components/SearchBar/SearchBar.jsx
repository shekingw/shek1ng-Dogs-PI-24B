import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameDogs } from '../../actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [currentPage, setCurrentPage] = useState();
	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getNameDogs(name));
		setCurrentPage(1);
		setName('');
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Buscar..."
				onChange={(e) => handleInputChange(e)}
				value={name}
			/>
			<button type="submit" onClick={(e) => handleSubmit(e)}>
				Buscar
			</button>
		</div>
	);
}
