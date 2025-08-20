require('dotenv').config();
const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    } catch(error) {
        console.log(error);
    }
}


module.exports = connectDB;
