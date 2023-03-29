const { Router } = require("express");
const { DoctorModel } = require("../models/doctor.model.js");
const doctorRoute = Router();
const slots = require("../utils/slots.js")

doctorRoute.post("/", async (req, res) => {
  try {
    const doctor = DoctorModel({ ...req.body, slots});
    await doctor.save();
    res.send({msg: "Doctor added"});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});


module.exports = { doctorRoute };
