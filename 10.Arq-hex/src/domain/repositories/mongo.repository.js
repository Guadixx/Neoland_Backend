//requerimos todas las herramientas y librerias que vamos a utilizar

const config = require('config-yml');
const mongoose = require('mongoose');
const magic = require('../../utils/magic');
const dotenv = require('dotenv');

const movie = require('../entities/entity-movie');
const show = require('../entities/entity-show');

//Configuramos dotenv
dotenv.config();

//Inicializamos un objeto vacío en el cual almacenamos de manera 'local'(Temporalmente) la información de la conexión con la base de datos y las entidades que va a implementar

let db = {};

//Si en nuestro fichero config tenemos db.mongodb y esta tiene longitud
if (config.db.mongodb && config.db.mongodb.length > 0) {
  //Por cada una de las propiedades se conectará a la base de datos y va a ir almacenando las conexiones
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //vamos a modificar nuestro objeto db inicial y vamos a ir implementandolo tanto las conexiones como los propios modelos
    db[c.nameconn] = {};
    //El conector con mongo es mongoose
    db[c.nameconn].conn = mongoose;
    //Implementarle la entidad movie, show  y le pasamos mongoose por argumento
    db[c.nameconn].Movie = movie(mongoose);
    db[c.nameconn].Show = show(mongoose);
  });
  exports.db = db;
  magic.LogInfo('Donectado a la base de datos ');
} else {
  magic.LogDanger('No existe la base de datos');
}
