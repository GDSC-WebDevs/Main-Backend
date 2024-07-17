const expModel = require('../database/Models/expModel');

async function addExperience(req, res) {
    try {
        let data = await req.body
        // console.log(data);
        const newExperience = await new expModel(data)
        await newExperience.save()
        res.json(newExperience)
    } catch (error) {
        console.log(error);
    }

}

async function uploadImg(req, res) {
    try {
        const files = req.files;
    
        // Get the file URLs
        const profilepic = files.file1 ? `${process.env.BASE_URL}/images/${files.file1[0].filename}` : null;
        const logo = files.file2 ? `${process.env.BASE_URL}/images/${files.file2[0].filename}` : null;
    
        res.json({
          message: 'Files uploaded successfully.',
          profilepic: profilepic,
          logo: logo
        });
      } catch (error) {
        res.status(400).send('Error uploading files.');
      }
}

module.exports = { uploadImg,addExperience }