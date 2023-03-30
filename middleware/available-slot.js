const { DoctorModel } = require("../models/doctor.model.js");

const is_slot_available = async (req, res, next) => {
  let { day, doctor } = req.params;

  doctor = doctor.toLowerCase();
  day = day.toLowerCase();

  const data = await DoctorModel.findOne({ name: doctor });

  data?.slots?.forEach( async (el) => {
    if (el.day == day && el.is_booked == false) {
      await DoctorModel.updateOne({_id: data._id, slots: {$elemMatch: {day: day}}}, {$set:{"slots.$.is_booked": true}})

      next();
      return;
    }

    if (el.day == day && el.is_booked == true) {
      res.send({ msg: "Slot is already booked" });
      return;
    }
  });
};

module.exports = { is_slot_available };
