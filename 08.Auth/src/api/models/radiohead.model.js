const mongoose = require('mongoose')

const RadioheadSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: { type: Number, required: true, trim: true },
  poster: { type: String, required: false },
})

const Radiohead = mongoose.model('Radiohead', RadioheadSchema)

module.exports = Radiohead
