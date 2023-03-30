const { DoctorModel } = require("../models/doctor.model.js");
const is_slot_available = async (req, res, next) => {
  let { day, doctor } = req.params;
  doctor = doctor.toLowerCase();
  day = day.toLowerCase();
  console.log(day, doctor);
  const data = await DoctorModel.findOne({ name: doctor });
  data?.slots?.forEach((el) => {
    if (el.day == day && el.is_booked == false) {
      next();
      console.log(111);
      return;
    }
    if (el.day == day && el.is_booked == true) {
      res.send({ msg: "Slot is already booked" });
      return;
    }
  });
};

module.exports = { is_slot_available };
