import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
	return (
		<div className="container-notFound">
			<Link to="/home">
				<button>Regresar</button>
			</Link>
			<h1>Error 404 NOT FOUND</h1>;
		</div>
	);
}
