const { Router } = require("express");
const { AppointmentModel } = require("../models/appointment.model");
const appointmentRoute = Router();

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
