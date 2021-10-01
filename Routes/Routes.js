const express = require('express');
const {Personajes} = require('../models/index');
const {peliculasSeries} = require('../models/index')
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
//Listar personajes
router.get('/characters', (req, res) => { 
                        Personajes.findAll({attributes: ['nombre', 'imagen']})
                        .then( personajes => res.json(personajes))
                        .catch(
                            err => console.log(err)
                        ); 
                    } );




                    
//Rutas para las peliculas y series
///Crear 
router.post('/movies', PeliculasSeriesController.guardarPeliculaSerie);
// Listar Peliculas
router.get('/movies', (req, res) => { 
    peliculasSeries.findAll()
    .then( peliculaSerie => res.json(peliculaSerie))
    .catch(
        err => console.log(err)
    ); 
} );

module.exports = router;