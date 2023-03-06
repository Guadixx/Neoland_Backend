const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//FUNCIONES 

//GENERAR TOKEN
const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error("Email or id are missing");
  }

  //Si tenemos id y email, los juntamos con el JWT SECRET y le decimos que caduque en 1 dia
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//VALIDAR TOKEN
const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }
  //Comprobamos que nuestro token esta generado con la clave secreta
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };