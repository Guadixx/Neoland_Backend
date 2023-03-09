const express = require('express')
const KingdomRoutes = express.Router()
const {
  retrieveAllKingdoms,
  retrieveKingdomById,
  createKingdom,
  updateKingdomById,
  deleteKingdomById,
} = require('../controllers/kingdom.controller')

KingdomRoutes.get('/all', retrieveAllKingdoms)
KingdomRoutes.get('/:id', retrieveKingdomById)
KingdomRoutes.post('/', createKingdom)
KingdomRoutes.patch('/:id', updateKingdomById)
KingdomRoutes.delete('/:id', deleteKingdomById)

module.exports = KingdomRoutes
