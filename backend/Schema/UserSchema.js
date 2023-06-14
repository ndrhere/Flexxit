const mongoose = require('mongoose');
const {Schema}= require('mongoose')

const UserSchema = new Schema({

    name:{
        type: "string",
        required: true
    },
    email:{
        type:'string',
        required: true,
        
    },
    password:{
        type:"string",
        required: true
    },
    confirmPassword:{
        type:"string",
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    }

})

const User = mongoose.model('user', UserSchema)
module.exports = User;