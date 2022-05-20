import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/home">Dogs</Link>
				</li>
				<li>
					<Link to="/dogs/create">Create Dog</Link>
				</li>
			</ul>
		</nav>
	);
}
