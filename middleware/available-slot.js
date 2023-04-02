const { DoctorModel } = require("../models/doctor.model.js");

const is_slot_available = async (req, res, next) => {
  let { day, doctor } = req.params;
  day = day.toLowerCase();
  if (day!=="monday" && day!=="tuesday" && day!=="wednesday" && day!=="thursday" && day!=="friday" && day!=="saturday"){
    res.send("Not a valid day");
    return;
  }

console.log(day,doctor);
  const data = await DoctorModel.findOne({ _id: doctor });

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
