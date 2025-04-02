const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: [5, "Email must be 5 characters"]
    },
    password: {
        type: String,
        required: true,
        min:[8, "Password must be 8 Characters"]
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User;