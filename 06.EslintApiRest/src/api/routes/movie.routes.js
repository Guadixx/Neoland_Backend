const express = require('express')

const MovieRoutes = express.Router()

const { upload } = require('../../middlewares/files.middleware')

const { getAllMovies, createMovie } = require('../controllers/movie.controller')

MovieRoutes.get('/', getAllMovies)
//INTERFERIMOS EN LA PETICIÓN PARA DECIRLE QUE USE LA FUNCIÓN DE SUBIDA
MovieRoutes.post('/', upload.single('image'), createMovie)

module.exports = MovieRoutes
