const mongoose = require('mongoose')

const regSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rollno: {
        type: String,
        required: [true, 'Roll no is required']
    },
    contactno: {
        type: Number,
    },
    email: {
        type: String,
        required: [true, "Email Id is required"]
    },
    paymentRecipt:{
        type: String,
        required: [true, "Image is required"]
    }
})

const regModel = mongoose.model('registation', regSchema)
module.exports = regModel
