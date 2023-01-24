const mongoose = require("mongoose");

const user = mongoose.Schema({
  hashedPassword: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  roles: { type: [String], require: true },
});
module.exports = mongoose.model("user", user);