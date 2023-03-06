const Radiohead = require('../models/radiohead.model')

const getAllRadioheadAlbums = async (req,res,next) => {
    try {
        const allRadiohead = await Radiohead.find()
        return res.status(200).json(allRadiohead)
    } catch (error) {
        return next('Album not found', error)
    }
}

const createRadioheadAlbum = async (req, res, next) => {
    try {
      const radiohead = new Radiohead({
        ...req.body,
        poster: req.file
          ? req.file.path
          : "https://res.cloudinary.com/dfnh5hecu/image/upload/v1678091587/Resources/orionthemes-placeholder-image_lkvf3q.jpg",
      });
      const createdAlbum = await radiohead.save();
      return res.status(201).json(createdAlbum);
    } catch (error) {
      return next("Error creating album", error);
    }
};


const updateAlbumByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newRadiohead = new Radiohead(req.body);
    newRadiohead._id = id;

    const originalRadiohead = await Radiohead.findById(id);
    if (req.file) {
      deleteImgCloudinary(originalRadiohead.poster);
      newRadiohead.poster = req.file.path;
    }
    await Radiohead.findByIdAndUpdate(id, newRadiohead);

    return res.status(200).json(newRadiohead);
  } catch (error) {
    return next("Failing updating album", error);
  }
};
module.exports = { getAllRadioheadAlbums, createRadioheadAlbum, updateAlbumByID }