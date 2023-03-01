const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/db");

//Importamos los modelos
const Movie = require("./src/models/Movie.model");

const PORT = 8080;

const server = express();
const router = express.Router();

//GET A TODOS LAS PELICULAS 
router.get("/movies", (req, res) => {
  return Movie.find()
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

//GET EL TITULO 
router.get("/movies/title/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const movies = await Movie.find({ title: title });
    if (movies) {
      return res.status(200).json(movies);
    } else {
      return res.status(404).json("No movie found in DB");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

//GET GENERO

router.get("/movies/genre/:genre", async (req, res) => {
  const genre = req.params.genre;
  try {
    const movies = await Movie.find({ genre: genre });
    if (movies) {
      return res.status(200).json(movies);
    } else {
      return res.status(404).json("No movie found in DB");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

server.use("/api/v1", router);

connect();
//SERVER LISTEN PARA EL LOCAL HOST 
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});