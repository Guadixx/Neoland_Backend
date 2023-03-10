const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connect = require('./utils/connect')
const { configCloudinary } = require('./middleware/files.middleware')

dotenv.config()

//CONFIG CLOUDINARY 
configCloudinary()

const PORT = process.env.PORT || 8081

const server = express()
//Connect to DB
connect()

//CORS
server.use(
  cors({
    origin: '*',
    credentials: true,
  })
)
//PARSER

server.use(express.json({ limit: '5mb' }))
server.use(express.urlencoded({ limit: '5mb', extended: true }))

//RUTAS

const RadioheadRoutes = require('./api/routes/radiohead.routes')
server.use('/api/v1/radiohead', RadioheadRoutes)

const UsersRoutes = require("./api/routes/users.routes");
server.use("/api/v1/users", UsersRoutes);

//Route not found
server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  return next(error)
})

//Hide tech
server.disable('x-powered-by')

//Listen
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
