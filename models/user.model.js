const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    mob_no: String,
    dob: String,
  },
  {
    versionKey: false,
  }
);

const userModel = new mongoose.model("Registered_User", UserSchema);

module.exports = { userModel };
