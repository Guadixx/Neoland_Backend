const express = require('express');
const dotenv = require('dotenv');

// Requerimos el archivo de configuración de nuestra DB
const {connect} = require('./db.js');

const PORT = process.env.PORT;
dotenv.config();

connect();
const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});