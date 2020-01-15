const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema ({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null,
        unique: true
    },
    username: {
        type: String,
        default: null,
        unique: true 
    }, 
    gender: String, 
    phone: {
        type: String,
        default: null,
    },
    password: {
        type: String,
        default: null,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    activated_at: {
        type: Date,
        default: null
    }, 
    activation_token: {
        type: String,
        default: null
    },
    deleted_at: {
        type: Date,
        default: null
    }
})

let User = mongoose.model("User", userSchema)
module.exports = User
