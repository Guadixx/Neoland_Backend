const Kingdom = require('../models/kingdom.models')

async function retrieveAllKingdoms(req, res, next) {
  try {
    const kigdoms = await Kingdom.find()
    res.status(200).json(kigdoms)
  } catch (error) {
    return next(error)
  }
}

async function retrieveKingdomById(req, res, next) {
  try {
    const { id } = req.params
    const kingdom = await Kingdom.findById(id)
    res.status(200).json(kingdom)
  } catch (error) {
    return next(error)
  }
}

async function createKingdom(req, res, next) {
  try {
    const kingdom = new Kingdom(req.body)
    const kingdomDB = await kingdom.save()
    res.status(201).json(kingdomDB)
  } catch (error) {
    return next(error)
  }
}

async function updateKingdomById(req, res, next) {
  try {
    const { id } = req.params
    const updateKingdom = await Kingdom.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updateKingdom)
  } catch (error) {
    return next(error)
  }
}

async function deleteKingdomById(req, res, next) {
  try {
    const { id } = req.params
    const kingdom = await Kingdom.findByIdAndDelete(id)
    res.status(200).json(kingdom)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  retrieveAllKingdoms,
  retrieveKingdomById,
  createKingdom,
  updateKingdomById,
  deleteKingdomById,
}
const Character = require('../models/character.model')

async function retrieveAllCharacters(req, res, next) {
  try {
    const characters = await Character.find().populate('kingdom')
    res.status(200).json(characters)
  } catch (error) {
    return next(error)
  }
}

async function retrieveCharacterById(req, res, next) {
  try {
    const { id } = req.params
    const character = await Character.findById(id).populate('actors')
    res.status(200).json(character)
  } catch (error) {
    return next(error)
  }
}

async function createCharacter(req, res, next) {
  try {
    const character = new Character(req.body)
    const characterDB = await character.save()
    return res.status(201).json(characterDB)
  } catch (error) {
    return next(error)
  }
}

async function updateCharacterById(req, res, next) {
  try {
    const { id } = req.params
    const updateCharacter = await Character.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    res.status(200).json(updateCharacter)
  } catch (error) {
    return next(error)
  }
}

async function deleteCharacterById(req, res, next) {
  try {
    const { id } = req.params
    const character = await Character.findByIdAndDelete(id)
    res.status(200).json(character)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  retrieveAllCharacters,
  retrieveCharacterById,
  createCharacter,
  updateCharacterById,
  deleteCharacterById,
}
