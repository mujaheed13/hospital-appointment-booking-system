const express = require('express');
const app = express();
const cors = require("cors")
const path = require('path');
const connection = require('./config/db');
require('dotenv').config();

app.use(express.json())
app.use(cors())


app.get("/home", (req, res) => {
    res.send("Api Working fine")
})

app.get("/", (req, res) => {
    app.use(express.static(path.join(__dirname, "client", "dist")))
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
});


app.listen(process.env.port, async () => {
    try {
        await connection;
    } catch (error) {
        console.log('Something went wrong while connecting to the Mongo DataBase ' + error);
    }
    console.log(`listening on port ${process.env.port}`);
});