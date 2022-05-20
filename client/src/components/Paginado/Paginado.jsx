import React from 'react';

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(allDogs / dogsPerPage) - 1; i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<nav>
			<ul className="paginado">
				{pageNumbers &&
					pageNumbers.map((number) => (
						<li className="number" key={number}>
							<button onClick={() => paginado(number)}>{number}</button>
						</li>
					))}
			</ul>
		</nav>
	);
}
