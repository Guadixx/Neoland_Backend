const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Upgrade Hub!');
});

router.get('/movies', (req, res) => {
  const movies = ['Xmen', 'Avengers', 'Black Widow'];
  res.send(movies);
});

router.get('/movies/:movie', (req, res) => {
    const nameMovie = req.params.movie //Guardo en una variable el valor introducido en la url
    const movies = ['Xmen', 'Avengers', 'Black Widow'];
		//Busco el indice donde se encuentra la coincidencia    
		const findMovieIndex = movies.indexOf(nameMovie);
		//Si no hay coincidencia devuelvo mensaje de que no coincide
    if (findMovieIndex === -1) {
        res.send('No se ha encontrado la película');
    }
    res.send(movies[findMovieIndex]);//Envío la respuesta encontrada.
})
// http://localhost:3000/query/?nombre=paco&apellido=pepe

router.get('/query', (req, res) => {
  const nombre = req.query.nombre
  const apellido = req.query.apellido
	// const {nombre,apellido} = req.query
  res.send("¡Hola Mundo! os saluda => " + nombre + " " + apellido + 
    " desde GET 2, con Query params")   
})

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});