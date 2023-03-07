const server = require('./app')

const PORT = 8080

//SOLO ARRANCA SERVER SI LO INICIAMOS DESDE INDEX.JS

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

module.exports = server
