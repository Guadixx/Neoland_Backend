const Movie = require('../models/movie.model')

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    return res.status(200).json(movies)
  } catch (error) {
    return next('Movies not found', error)
  }
}

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      ...req.body,
      image: req.file ? req.file.path : 'Image not found',
    })
    const createdMovie = await newMovie.save()
    return res.status(200).json(createdMovie)
  } catch (error) {
    return next('Failed creating Movie', error)
  }
}

module.exports = { getAllMovies, createMovie }
