const mongoose = require('mongoose');
const {Schema} = require('mongoose')


const DetailsSchema = new Schema ({

    CardNumber :{
      type:Number,
      required: true,
      unique: true
    },

    ExpirationDate : {
        month : {
            type : Number,
            required: true
        },
        year : {
            type: Number, 
            required: true
           
        }
    },

    CVV : {
        type: Number,
        required: true
    },

    FirstName: {
        type: String,
        required: true
    },

    LastName: {
        type: String,
        required: true
    }
})

const Details = mongoose.model("details", DetailsSchema)
module.exports = Details