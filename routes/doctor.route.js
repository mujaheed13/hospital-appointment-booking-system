const { Router } = require("express");
const { authorize } = require("../middleware/authorize.js");
const { DoctorModel } = require("../models/doctor.model.js");
const doctorRoute = Router();
const { slots } = require("../utils/slots.js");


doctorRoute.post("/add", authorize(["admin"]), async (req, res) => {
  try {
    const doctor = DoctorModel({ ...req.body, slots: slots });
    await doctor.save();
    res.send({ msg: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

doctorRoute.get("/", authorize(["admin"]), async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.send(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

doctorRoute.delete("/:id", authorize(["admin"]), async (req, res) => {
  const { id } = req.params;
  try {
    await DoctorModel.deleteOne({ _id: id });
    res.send({ msg: "Doctor deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

module.exports = { doctorRoute };
