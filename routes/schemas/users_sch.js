const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  uid: {
    type: "String",
    unique: true,
    required: true,
  },
  username: {
    type: "String",
    unique: true,
    required: true,
  },
  password: {type: String, required: true},
  firstname: {type: String, required: true},
  surname: {type: String, required: true},
  address: String,
  user_tel: String,  
  date_create: {
    type: Date, 
    default: Date.now
  }
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const users = connection.model("users", userSchema);
module.exports = users;