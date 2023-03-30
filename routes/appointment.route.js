const { Router } = require("express");
const { AppointmentModel } = require("../models/appointment.model");
const appointmentRoute = Router();
const passport = require("../config/googleOAuth");

// ---------------------------------Google-OAuth--------------------------------------------
appointmentRoute.get(
  "/google/auth",
  passport.authenticate("google", { scope: ["profile","email"] })
);

appointmentRoute.get(
  "/google/auth/callback",
  passport.authenticate("google", { failureRedirect: "/login" , session:false}),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect("/");
  }
);

// appointmentRoute.get("/google/auth", (req, res) => {
//   res.send("OAuth Done Succsfully Redirecting To Dashboard");
// });

// ---------------------------------------------------------------------------------------

appointmentRoute.get("/", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.send(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

appointmentRoute.post("/book", async (req, res) => {
  try {
    const appointment = AppointmentModel(req.body);
    await appointment.save();
    res.send({ msg: "Appointment Booked" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

module.exports = { appointmentRoute };
