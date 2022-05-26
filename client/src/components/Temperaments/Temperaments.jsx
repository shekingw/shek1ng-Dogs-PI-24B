import react, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments } from '../../actions';

export default function Temperaments() {
	const dispatch = useDispatch();
	const allTemperaments = useSelector((state) => state.allTemperaments);

	useEffect(() => {
		dispatch(getAllTemperaments());
	}, []);
	console.log(
		'console log',
		allTemperaments.map((temper) => temper.name),
	);
	const temperArr = allTemperaments.map((temper) => temper.name);
	return (
		<div>
			<ul>
				{temperArr.map((temper, id) => (
					<li key={id}>{temper}</li>
				))}
			</ul>
		</div>
	);
}
