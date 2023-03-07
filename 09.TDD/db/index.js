const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const dotenv = require('dotenv')
dotenv.config()

mongoose.Promise = Promise

const mongoServer = new MongoMemoryServer()

//TRAER LA URI

module.exports.getUri = async () => {
  if (process.env.NODE_ENV === 'test') {
    return mongoServer.getUri()
  }

  return process.env.MONGO_URI
}

//FUNCION CONNECT

module.exports.connect = async ({ uri }) => {
  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }

  await mongoose.connect(uri, mongooseOpts)

  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected to ${uri}`)
  })
}

module.exports.closeDb = async () => {
  await mongoose.disconnect()

  if (process.env.NODE_ENV === 'test') {
    await mongoServer.stop()
  }
}
