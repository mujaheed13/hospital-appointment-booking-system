const { Router } = require("express");
const { authorize } = require("../middleware/authorize.js");
const { DoctorModel } = require("../models/doctor.model.js");
const doctorRoute = Router();
const { slots } = require("../utils/slots.js");


doctorRoute.post("/add", async (req, res) => {
  try {
    const doctor = DoctorModel({ ...req.body, slots: slots });
    await doctor.save();
    res.send({ message: "Doctor added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

doctorRoute.get("/", async (req, res) => {
  try {
    const doctors = await DoctorModel.find();
    res.send(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

doctorRoute.delete("/:id",  async (req, res) => {
  const { id } = req.params;
  try {
    await DoctorModel.deleteOne({ _id: id });
    res.send({ message: "Doctor deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

doctorRoute.patch("/:id",  async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await DoctorModel.findByIdAndUpdate(id, data);
    res.send({ message: "Doctor updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error_msg: error });
  }
});

module.exports = { doctorRoute };
