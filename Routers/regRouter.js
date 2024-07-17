const express = require('express')
const multer = require('multer');
const path = require('path');
const { uploadImg,register } = require('../Controler/regControler')

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



 const regRouter=express.Router();



 regRouter.post("/upload",upload.fields([{ name: 'file' }]),uploadImg);
 regRouter.post('/', register)



module.exports = regRouter