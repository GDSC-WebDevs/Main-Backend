const regModel = require('../database/Models/regModel');

async function register(req, res) {
    try {
        let data = await req.body
        const newreg = await new regModel(data)
        await newreg.save()
        res.json(newreg)
    } catch (error) {
        console.log(error)
    }
}

async function uploadImg(req, res) {
    try {
        const files = req.files;
    
        // Get the file URLs
        const paymentRecipt = files.file ? `${process.env.BASE_URL}/images/${files.file[0].filename}` : null;
    
        res.json({
          message: 'Files uploaded successfully.',
          paymentRecipt
        });
      } catch (error) {
        res.status(400).send('Error uploading files.');
      }
}



module.exports = { register,uploadImg }