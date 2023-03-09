const mongoose = require('mongoose')

const kingdomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Kingdom = mongoose.model('actors', kingdomSchema)

module.exports = Kingdom
