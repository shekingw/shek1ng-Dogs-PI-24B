import axios from 'axios';

export function getDogs() {
	return async function (dispatch) {
		var json = await axios('/dogs/');
		return dispatch({
			type: 'GET_DOGS',
			payload: json.data,
		});
	};
}

export function getAllTemperaments() {
	return async function (dispatch) {
		var json = await axios('/dogs/temperament');
		return dispatch({
			type: 'GET_ALL_TEMPERAMENTS',
			payload: json.data,
		});
	};
}

export function getDogById(id) {
	return async function (dispatch) {
		var json = await axios(`/dogs/dog/${id}`)
			.then((result) => {
				return dispatch({
					type: 'GET_DOGS_ID',
					payload: result.data,
				});
			})
			.catch((error) => {
				return dispatch({
					type: 'GET_DOGS_ID',
					payload: error.response.data,
				});
			});
	};
}

export function clearDog() {
	return {
		type: 'CLEAR_DOG',
	};
}

export function getNameDogs(name) {
	return async function (dispatch) {
		try {
			var json = await axios.get(`/dogs/q?name=${name}`);
			return dispatch({
				type: 'GET_NAME_DOGS',
				payload: json.data,
			});
		} catch (error) {
			return alert('No existe este Dog.');
		}
	};
}

export function postDogs(payload) {
	return async function (dispatch) {
		const response = await axios.post('/dogs/create', payload);
		return response;
	};
}

export function filterTemperament(payload) {
	return {
		type: 'FILTER_TEMPERAMENT',
		payload,
	};
}

export function getTemperament(payload) {
	return async function (dispatch) {
		var json = await axios(`/dogs/temperament`, payload);
		return dispatch({
			type: 'GET_TEMPERAMENT',
			payload: json.data,
		});
	};
}

export function orderByName(payload) {
	return {
		type: 'ORDER_BY_NAME',
		payload,
	};
}

export function orderByWeight(payload) {
	return {
		type: 'ORDER_BY_WEIGHT',
		payload,
	};
}

export function filterCreated(payload) {
	return {
		type: 'FILTER_CREATED',
		payload,
	};
}
