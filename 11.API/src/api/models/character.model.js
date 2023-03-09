const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    bender: { type: String, required: false, trim: true },
    position: { type: String, required: false, trim: true },
    kigdom: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'kingdom', required: true },
    ],
    image: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

const Character = mongoose.model('character', characterSchema)

module.exports = Character
