const { Router } = require('express');
const { getTemperamentDb } = require('./extras/temperamentController');
const { Dog, Temperament } = require('../db.js');
const router = Router();

router.get('/', async (req, res, next) => {
	try {
		res.status(200).send(await getTemperamentDb());
	} catch (error) {
		return error;
	}
});

module.exports = router;
