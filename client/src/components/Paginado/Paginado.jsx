import React from 'react';

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
	const pageNumbers = [];

	for (let i = 0; i <= Math.ceil(allDogs / dogsPerPage) - 1; i++) {
		pageNumbers.push(i + 1);
	}

	return (
		<div className="containerUl">
			<div className="containerUl2">
				<ul className="paginado">
					{pageNumbers &&
						pageNumbers.map((number) => (
							<li className="number" key={number}>
								<button className="liBtn" onClick={() => paginado(number)}>
									{number}
								</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
