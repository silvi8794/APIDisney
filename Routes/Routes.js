const express = require('express');

const router = express.Router();

//Controlador Auth
const AuthController = require('../controllers/AuthController');
const PersonajesController = require('../controllers/PersonajesController');
const PeliculasSeriesController = require('../controllers/PeliculasSeriesController');

//home
router.get('/', (req,res) => res.json({ hello: "World"}));

// Rutas de login y register 
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);


//Rutas para los personajes
///Crear personaje
router.post('/characters', PersonajesController.guardarPersonaje);


//Rutas para las peliculas y series
///Crear 
router.post('/movies', PeliculasSeriesController.guardarPeliculaSerie);

module.exports = router;