const initialState = {
	dogs: [],
	dog: {},
	allDogs: [],
	temperaments: [],
	allTemperaments: [],
};
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_DOGS':
			return {
				...state,
				dogs: action.payload,
				allDogs: action.payload,
			};
		case 'GET_DOGS_ID':
			return {
				...state,
				dog: action.payload,
			};
		case 'CLEAR_DOG':
			return {
				...state,
				dog: {},
			};

		case 'GET_NAME_DOGS':
			return {
				...state,
				dogs: action.payload,
			};
		case 'POST_DOGS':
			return {
				...state,
			};
		case 'FILTER_TEMPERAMENT':
			let dogByTemperament = state.allDogs;
			let dogFilter =
				action.payload === 'all'
					? dogByTemperament
					: dogByTemperament.filter((dog) =>
							dog.temperament?.includes(action.payload),
					  );
			return {
				...state,
				dogs: dogFilter,
			};
		case 'GET_TEMPERAMENT':
			return {
				...state,
				temperaments: action.payload,
			};
		case 'GET_ALL_TEMPERAMENTS':
			return {
				...state,
				allTemperaments: action.payload,
			};
		case 'FILTER_CREATED':
			let allDogs = state.allDogs;
			let filterDogs =
				action.payload === 'created'
					? allDogs.filter((dog) => dog.createdInDb)
					: allDogs.filter((dog) => !dog.createdInDb);
			return {
				...state,
				dogs: action.payload === 'all' ? allDogs : filterDogs,
			};
		case 'ORDER_BY_NAME':
			let sortedArr =
				action.payload === 'asc'
					? state.dogs.sort(function (a, b) {
							if (a.name > b.name) {
								return 1;
							}
							if (b.name > a.name) {
								return -1;
							}
							return 0;
					  })
					: state.dogs.sort(function (a, b) {
							if (a.name > b.name) {
								return -1;
							}
							if (b.name > a.name) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				dogs: sortedArr,
			};
		case 'ORDER_BY_WEIGHT':
			let weightArr =
				action.payload === 'small'
					? state.dogs.sort(function (a, b) {
							if (parseInt(a.weight) > parseInt(b.weight)) {
								return 1;
							}
							if (parseInt(b.weight) > parseInt(a.weight)) {
								return -1;
							}
							return 0;
					  })
					: state.dogs.sort(function (a, b) {
							if (parseInt(a.weight) > parseInt(b.weight)) {
								return -1;
							}
							if (parseInt(b.weight) > parseInt(a.weight)) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				dogs: weightArr,
			};
		default:
			return state;
	}
}

export default rootReducer;
