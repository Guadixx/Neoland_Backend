const multer = require('multer')
const cloudinary = require('cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const dotenv = require('dotenv')
dotenv.config()
//ALMACEN DE FOTOS

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Movies',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  },
})

//CREAR FUNCIÓN SUBIR IMAGEN

const upload = multer({ storage })

//FUNCION BORRAR IMAGEN

const deleteImgCloudinary = (imgUrl) => {
  //----Con los siguientes métodos de JavaScript accederemos a la ruta de la imagen, su nombre, su carpeta y el id con el que se almacena en cloudinary para localizarlo nivel a nivel.
  const imgSplited = imgUrl.split('/')
  const nameSplited = imgSplited[imgSplited.length - 1].split('.')
  const folderSplited = imgSplited[imgSplited.length - 2]
  const public_id = `${folderSplited}/${nameSplited[0]}`

  //----Con el método destroy localizamos nuestro archivo e imprimimos por callback un console.log indicando que se ha podido destruir correctamente.
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary')
  })
}

//CONFIGURAR CON NUESTRA CUENTA

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  })
}

module.exports = [upload, deleteImgCloudinary, configCloudinary]
