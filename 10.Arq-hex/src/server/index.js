//CREANDO SERVIDOR 
//Crear el servidor, implementarle las cors y añadirle las rutas
const express = require('express');
const cors = require('cors');
const server = express();

//Cors
server.use(cors());

//Parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Le añadimos todas las rutas que hemos creado. Estamos importando routes y pasandole por argumento server
require('../routes/index')(server);

module.exports = server;