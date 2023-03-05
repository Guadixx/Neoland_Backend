const Actor = require('../models/actor.model')

const getAllActors = async (req, res, next) => {
  try {
    const actors = await Actor.find()
    return res.status(200).json(actors)
  } catch (error) {
    return next('Actor not found', error)
  }
}

module.exports = { getAllActors }
