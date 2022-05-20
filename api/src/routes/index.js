const { Router } = require('express');
const dogsRoute = require('./dogs.js');
const temperamentRoute = require('./temperament.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/dogs', dogsRoute);
router.use('/dogs/temperament', temperamentRoute);

module.exports = router;
