const { Router } = require('express');
const { Dog, Temperament } = require('../db');
const { combineApiDb, getDogsDB } = require('./extras/dogController');
const router = Router();

router.get('/', async (req, res, next) => {
	try {
		res.status(200).send(await combineApiDb());
	} catch (error) {
		return error;
	}
});
router.get('/q', async (req, res, next) => {
	let { name } = req.query;
	try {
		let dogs = await combineApiDb();
		let nombre = await dogs.filter((dog) => dog.name.includes(name));
		if (nombre.length === 0) {
			res.status(404).send('No existe un DOG con esa palabra');
		} else {
			res.status(200).json(nombre);
		}
	} catch (error) {
		return error;
	}
});
router.get('/dog/:name', async (req, res, next) => {
	const { name } = req.params;
	let dogs = await combineApiDb();
	try {
		if (name) {
			let dogsName = await dogs.filter((dog) => dog.name == name);
			console.log('dogsname', dogsName);
			dogsName.length == 0
				? res.status(404).send('No hay ningun Dog asociado con ese nombre')
				: res.status(201).json(dogsName);
		}
	} catch (error) {
		return error;
	}
});

router.post('/dog', async (req, res, next) => {
	const { name, weight, height, temperament, life_span } = req.body;
	let temperamentDb = await Temperament.findAll({
		where: { name: temperament },
	});
	try {
		let dog = await Dog.create({
			name,
			weight,
			height,
			life_span,
		});
		dog.addTemperament(temperamentDb);
		res.send('Successfully created Dog');
	} catch (error) {
		res
			.status(404)
			.send(
				error.parent.detail.includes('Ya existe la llave')
					? 'Ya existe este Dog'
					: error,
			);
	}
});

module.exports = router;
