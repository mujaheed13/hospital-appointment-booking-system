const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MongoUrl);

module.exports = { connection };
