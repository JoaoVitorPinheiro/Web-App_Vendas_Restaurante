const mongoose = require("mongoose");
require('dotenv').config();

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pqydh9l.mongodb.net/?retryWrites=true&w=majority`

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("Conectado com o banco de dados com sucesso!")
    }
    catch(error) {
        console.log("Ocorreu um erro ao conectar com o banco de dados: ", error)
    }
}

module.exports = connectToDatabase;