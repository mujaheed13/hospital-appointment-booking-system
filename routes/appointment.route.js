const { Router } = require("express");
const { is_slot_available } = require("../middleware/available-slot.js");
const { AppointmentModel } = require("../models/appointment.model.js");
const appointmentRoute = Router();

appointmentRoute.get("/", async (req, res) => {
  const user_id = req.query.user_id;
  try {
    if (user_id) {
      const appointments = await AppointmentModel.find({ user_id });
      res.send(appointments);
      return;
    }
    const appointments = await AppointmentModel.find();
    res.send(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

appointmentRoute.post("/:day/:doctor", is_slot_available, async (req, res) => {
  try {
    const appointment = AppointmentModel(req.body);
    await appointment.save();
    res.send({ msg: "Appointment Booked" });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

appointmentRoute.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await AppointmentModel.deleteOne({_id: id});
        res.send({msg: "Appointment Deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ error_msg: error });
    }
});

module.exports = { appointmentRoute };
