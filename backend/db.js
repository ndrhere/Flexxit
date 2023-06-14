const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/flexxit?directConnection=true"

async function connectToMongo(){
   try{
    await mongoose.connect(mongoURI)
    console.log("MongoDB connected successfully")
   } catch(error){
    console.log("Failed To connect"+ error)
   }
}


module.exports = connectToMongo;