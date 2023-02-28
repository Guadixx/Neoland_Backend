//Importamos mongoose para conectarnos a la base de datos
const mongoose = require("mongoose");
//Importamos el modelo Movie
const Movie = require("../models/Movie.model");

const moviesDataSet = [
  {
    title: "Call Me By Your Name ",
    poster:
      "https://posters.movieposterdb.com/21_11/2017/5726616/l_5726616_c85f77ed.jpg",
    year: 2017,
    director: "Luca Guadagnino",
  },
  {
    title: "Bones and all",
    poster:
      "https://xl.movieposterdb.com/22_12/2022/10168670/xl_bones-and-all-movie-poster_525d8ab9.jpg?v=2023-02-11%2004:46:53",
    year: 2022,
    director: "Luca Guadagnino",
  },
  {
    title: "Suspiria",
    poster:
      "https://xl.movieposterdb.com/20_01/2018/1034415/xl_1034415_e41352ef.jpg?v=2023-01-02%2011:39:22",
    year: 2018,
    director: "Luca Guadagnino",
  },
];

//Convertir cada una de las peliculas del dataset en tipo Movie
const movieDocuments = moviesDataSet.map((movie) => new Movie(movie));

//Una vez tenemos los documentos con su tipo transformados nos conectamos a la base de datos
const MONGO_URI =
  "mongodb+srv://Guada:Guada1307!@cluster0.gllwn3c.mongodb.net/moviesDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Vamos a encontrar con el metodo find todos los personajes que haya en la base de datos del tipo modelo Movie
    const allMovies = await Movie.find();
    //Si allMovies tiene algo...
    if (allMovies.length) {
      //Borramos toda la colección de movies
      await Movie.collection.drop();
      console.log("Colección borrada");
    }
  })
  .catch((err) => console.log("Error borrando movies", err))
  .then(async () => {
    //Un vez vaciada la colección de movies de la base de datos insertamos todos los elementos que haya en nuestro array de documentos
    await Movie.insertMany(movieDocuments);
    console.log("Colección creada");
  })
  .catch((err) => console.log("Error insertando movies", err))
  //Finalmente nos desconectamos de la base de datos
  .finally(() => mongoose.disconnect());