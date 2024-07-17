
const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[A-z0-9_-]+\/?$/;
const githubRegex = /^https:\/\/github\.com\/[A-z0-9_-]+\/?$/;
const PhoneNumberRegex = /^(\+91)?[6789]\d{9}$/;

const expSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    contact: {
        type: String,
        required: [true, "Please enter your contact number"],
        match: [PhoneNumberRegex, "Invalid Indian contact number"]
    },
    linkedin: {
        type: String,
        required: [true, "Please enter your LinkedIn profile URL"],
        match: [linkedInRegex, "Invalid LinkedIn profile URL"]
    },
    company: {
        type: String,
    },
    position: {
        type: String,
    },
    role: {
        type: String,
    },
    bio: {
        type: String,
        required: [true, "Please enter your bio"],
        minlength: [10, "Bio must be at least 10 characters long"],
        maxlength: [300, "Bio must be at most 300 characters long"]
    },
    rollno: {
        type: String,
        required: [true, "Please enter your Roll No."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        match: [/^\S+@\S+\.\S+$/, "Invalid email address"]
    },
    github: {
        type: String,
        required: [true, "Please enter your GitHub profile URL"],
        match: [githubRegex, "Invalid GitHub profile URL"]
    },
    othersocial: {
        type: String
    },
    ctc: {
        type: Number,
        min: [0, "CTC must be a positive number"],
        default: undefined
    },
    // experience: {
    //     type: String,
    // },
    profilepic: {
        type: String
    },
    logo: {
        type: String
    }
});

const expModel = mongoose.model('experience', expSchema)
module.exports = expModel

