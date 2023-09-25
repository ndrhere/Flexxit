const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ndrhere550:Itsmy%40password@newflexxit.ix8ny5t.mongodb.net/Flexxit?retryWrites=true&w=majority";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Failed To connect" + error);
  }
}

module.exports = connectToMongo;
