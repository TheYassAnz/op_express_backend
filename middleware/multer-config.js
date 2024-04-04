const multer = require('multer');

// config extensions allowed
const MIME_TYPES = {
    'images/jpg': 'jpg',
    'images/jpeg': 'jpg',
    'images/png': 'png',
}

// configure multer
const storage = multer.diskStorage({
    // config where to save the file
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    // config the file name
    filename: (req, file, callback) => {
        // replace space with underscore
        const name = file.originalname.split(' ').join('_');
        // get the extension from the mimetype
        const extension = MIME_TYPES[file.mimetype];
        callback(null, Date.now() + '_' + name + extension);
    }
})

// export the multer and specify the type of file to upload
module.exports = multer({ storage }).single('image');