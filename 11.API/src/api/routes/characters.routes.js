const express = require('express')
const CharacterRoutes = express.Router()
const {
  retrieveAllCharacters,
  retrieveCharacterById,
  createCharacter,
  updateCharacterById,
  deleteCharacterById,
} = require('../controllers/characters.controller')
CharacterRoutes.get('/all', retrieveAllCharacters)
CharacterRoutes.get('/:id', retrieveCharacterById)
CharacterRoutes.post('/', createCharacter)
CharacterRoutes.patch('/:id', updateCharacterById)
CharacterRoutes.delete('/:id', deleteCharacterById)

module.exports = CharacterRoutes
