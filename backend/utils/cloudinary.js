require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:"dmvxmurxw",
    api_key:"114759331854239",
    api_secret:"7MdggK5N94H-C0SYqQFw2vJ7t3Q"
})


module.exports = {cloudinary}