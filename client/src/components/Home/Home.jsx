import React from 'react';
import Dogs from '../Dogs/Dogs.jsx';
import Nav from '../NavBar/NavBar.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Home() {
	return (
		<div>
			<Nav />
			<SearchBar />
			<Dogs />
		</div>
	);
}
