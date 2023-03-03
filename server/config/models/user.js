

import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase: true,
        index: true
    },
    password : {
        type: String,
        required: true
    }
})