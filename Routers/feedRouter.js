const express = require('express')
const { sendfeedback } = require('../Controler/feedControler')

 const feedRouter=express.Router();


 feedRouter.post('/', sendfeedback)



module.exports = feedRouter