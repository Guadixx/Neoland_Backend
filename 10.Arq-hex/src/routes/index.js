//IMPORTAR CONTROLADORES, SERVICIOS CREADOS 
const apiServices = require('../controller/index');

//SERVIDOR ARGUMENTO APP, QUE SERÁ EL PROPIO SERVER A FUTURO 

const routes = (app) => {
    app.use('/api/v1', apiServices);
  };
  
  module.exports = routes;