const connectToDatabase = require("../Programacao/src/database/connect")

const dotenv=require('dotenv');
dotenv.config();

connectToDatabase();

require("./express");