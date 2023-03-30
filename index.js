const express = require("express");
const app = express();

const cors = require("cors")
const path = require('path');
const { connection } = require("./config/db.js");
const { appointmentRoute } = require('./routes/appointment.route.js');
const { UserRouter } = require("./routes/user.route.js");
const { doctorRoute } = require("./routes/doctor.route.js");
const { authentication } = require("./middleware/authentication.js");
require('dotenv').config();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/appointments", authentication);
app.use("/doctors", authentication);

//Routes
app.use("/user", UserRouter);
app.use("/appointments", appointmentRoute);
app.use("/doctors", doctorRoute);

app.get("/home", (req, res) => {
  res.send("Api Working fine");
});


app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "client", "dist")));
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});





app.listen(process.env.port, async () => {
  try {
      await connection;
      console.log("Connected To DB");
  } catch (error) {
    console.log(
      "Something went wrong while connecting to the Mongo DataBase " + error.message
    );
  }
  console.log(`listening on port ${process.env.port}`);
});
