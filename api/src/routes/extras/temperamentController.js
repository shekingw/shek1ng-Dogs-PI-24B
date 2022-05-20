const { API_DOG_REQUEST } = require('../../utils/globals.js');
const { Dog, Temperament } = require('../../db.js');
const axios = require('axios');

const getTemperamentApi = async () => {
	try {
		let temperamentos = [];
		const temperamentRequest = await axios.get(API_DOG_REQUEST);
		temperamentRequest.data.forEach((dog) => {
			if (dog.temperament) {
				let listTemperament = dog.temperament.split(', ');
				listTemperament.forEach((temperament) => {
					if (!temperamentos.includes(temperament)) {
						temperamentos.push(temperament);
					}
				});
			}
		});
		return temperamentos.forEach((e) => {
			Temperament.findOrCreate({ where: { name: e } });
		});
	} catch (error) {
		return error;
	}
};

const getTemperamentDb = async () => {
	const getTemperamentDb = await Temperament.findAll();
	let temperament = getTemperamentDb.map((temper) => {
		return {
			id: temper.id,
			name: temper.name,
		};
	});
	try {
		return temperament;
	} catch (error) {
		return error;
	}
};
module.exports = {
	getTemperamentApi,
	getTemperamentDb,
};
