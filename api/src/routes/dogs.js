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
		let nombre = await dogs.filter((dog) =>
			dog.name.toLowerCase().includes(name.toLowerCase()),
		);
		if (nombre.length === 0) {
			res.status(404).send('No existe un DOG con esa palabra');
		} else {
			res.status(200).json(nombre);
		}
	} catch (error) {
		return error;
	}
});
router.get('/dog/:id', async (req, res, next) => {
	const { id } = req.params;
	let dogs = await combineApiDb();
	try {
		if (id) {
			let dogsId = await dogs.find((dog) => dog.id == id);
			if (dogsId) {
				return res.status(201).json(dogsId);
			}
			return res
				.status(404)
				.json({ msg: 'No hay ningun Dog asociado a ese ID' });
		}
	} catch (error) {
		res.status(404).json({ msg: 'No hay ningun Dog asociado a ese ID' });
	}
});

router.post('/create', async (req, res, next) => {
	const { name, weight, height, temperament, life_span, image, createdInDb } =
		req.body;
	let temperamentDb = await Temperament.findAll({
		where: { name: temperament },
	});
	try {
		let dog = await Dog.create({
			name,
			weight,
			height,
			image,
			life_span,
			createdInDb,
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
