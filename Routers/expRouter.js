const express = require('express')
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { uploadImg,addExperience } = require('../Controler/expControler')


const imagesDir = path.join(__dirname,'..', 'Images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images');
    },
    filename: (req, file, cb) => {
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
    })



const expRouter = express.Router();



expRouter.post("/upload",upload.fields([{ name: 'file1' }, { name: 'file2' }]),uploadImg);
expRouter.post('/', addExperience)

module.exports = expRouter