const { Router } = require("express");

const { is_slot_available } = require("../middleware/available-slot.js");
const { AppointmentModel } = require("../models/appointment.model.js");
const { authentication } = require("../middleware/authentication.js");
const appointmentRoute = Router();
const passport = require("../config/googleOAuth");

// ---------------------------------Google-OAuth--------------------------------------------

// For using Google auth use port 8080 only coz it is listed there and make sure to add this into your env

// GOOGLE_CLIENT_ID = 115721161805-1bog8jokqdchurrptbtuchno0fq0ubv5.apps.googleusercontent.com

// GOOGLE_CLIENT_SECRET = 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

appointmentRoute.get(
  "/google/auth",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

appointmentRoute.get(
  "/google/auth/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.user);
    res.redirect("/dashboard");
  }
);

// appointmentRoute.get("/google/auth", (req, res) => {
//   res.send("OAuth Done Succsfully Redirecting To Dashboard");
// });

// ---------------------------------------------------------------------------------------

appointmentRoute.get("/", authentication, async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.send(appointments);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error_msg: error.message });
  }
});


appointmentRoute.post(
  "/:day/:doctor",
  authentication,
  is_slot_available,
  async (req, res) => {
    try {
      const appointment = AppointmentModel(req.body);
      await appointment.save();
      res.send({ msg: "Appointment Booked" });
      return;
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ error_msg: error.message });
    }
  }
);

appointmentRoute.delete("/:id", authentication, async (req, res) => {
  const { id } = req.params;
  try {
    await AppointmentModel.deleteOne({ _id: id });
    res.send({ msg: "Appointment Deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error_msg: error.message });
  }
});



appointmentRoute.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await AppointmentModel.findByIdAndUpdate(id, data);
    res.send({ message: "Appointment updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

module.exports = { appointmentRoute };
