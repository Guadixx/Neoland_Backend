const express = require("express");
const { upload } = require("../../middleware/files.middleware");
const { isAuth } = require('../../middleware/auth.middleware')

const {
  getAllRadioheadAlbums,
  createRadioheadAlbum,
  updateAlbumByID,
} = require("../controllers/radiohead.controllers");

const RadioheadRoutes = express.Router();

RadioheadRoutes.get("/", [isAuth], getAllRadioheadAlbums);
RadioheadRoutes.post("/", upload.single("poster"), createRadioheadAlbum)
RadioheadRoutes.patch("/:id", upload.single("poster"), updateAlbumByID);

module.exports = RadioheadRoutes;
