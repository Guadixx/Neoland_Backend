const express = require('express')

const ActorRoutes = express.Router()

const { getAllActors } = require('../controllers/actor.controller')

ActorRoutes.get('/', getAllActors)

module.exports = ActorRoutes
