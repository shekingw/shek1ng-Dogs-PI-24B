const { API_DOG_REQUEST } = require('../../utils/globals.js');
const { Dog, Temperament } = require('../../db.js');
const axios = require('axios');

const getDogsApi = async () => {
	try {
		let dogApi = await axios.get(API_DOG_REQUEST);
		let listDog = await dogApi.data.map((dog) => modelDog(dog));
		return listDog;
	} catch (error) {
		return error;
	}
};
const modelDog = (dog) => {
	const modelDog = {
		id: dog.id,
		name: dog.name,
		image: dog.image.url,
		height: dog.height.metric,
		weight: dog.weight.metric,
		temperament: dog.temperament,
		life_span: dog.life_span,
	};
	return modelDog;
};

const getDogsDB = async () => {
	const getDogsDB = await Dog.findAll({ include: Temperament });
	let dog = getDogsDB.map((dog) => {
		return {
			id: 300 + dog.id,
			name: dog.name,
			height: dog.height,
			weight: dog.weight,
			life_span: dog.life_span,
			temperament: dog.temperament,
		};
	});
	try {
		return dog;
	} catch (error) {
		return error;
	}
};

const combineApiDb = async function () {
	try {
		const dogsApi = await getDogsApi();
		const dogsDb = await getDogsDB();
		return [...dogsApi, ...dogsDb];
	} catch (error) {
		return error;
	}
};

module.exports = {
	getDogsApi,
	getDogsDB,
	combineApiDb,
};
