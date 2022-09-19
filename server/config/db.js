const mongoose = require("mongoose");


async function connectDB(){
    try {
        return await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log('Error connecting to database');
    }
}

module.exports = connectDB