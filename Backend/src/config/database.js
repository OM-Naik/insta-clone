const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB database");
    }).catch((error) => {
        console.error("Error connecting to MongoDB database:", error);
    });
}

module.exports = connectToDatabase;