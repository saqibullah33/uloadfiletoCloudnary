const mongoose = require("mongoose");

require("dotenv").config();
const dbConnnect= async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("db connected")
    } catch (error) {
        console.log("db connect error")
    }
}

module.exports = dbConnnect;