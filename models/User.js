const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  handle: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
