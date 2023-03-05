const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connect = require('./utils/connect')
const MovieRoutes = require('./api/routes/movie.routes')
const ActorRoutes = require('./api/routes/actor.routes')
const { configCloudinary } = require('./middlewares/files.middleware')
dotenv.config()

const PORT = process.env.PORT

//CONECTAMOS CLOUDINARY
configCloudinary()

const server = express()
connect()
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: true }))

server.use('/api/v1/movie', MovieRoutes)
server.use('/api/v1/actor', ActorRoutes)

//RUTAS
server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  return next(error)
})

server.disabled('x-powered-by')

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
