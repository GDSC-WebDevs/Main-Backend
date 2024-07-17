const mongoose = require('mongoose')

const feedSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, "Email Id is required"]
    },
    message:{
        type: String,
        required: [true, "meassage is required"]
    }
})

const feedModel = mongoose.model('feedback', feedSchema)
module.exports = feedModel
