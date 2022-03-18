const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  uid: {
    type: "Number",
    unique: true
  },
  firstname: {
    type: "String",
  },
  surname: {
    type: "String",
  },
  user_tel: {
    type: "String",
  },
  address: {
    type: "String",
  },
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const users = connection.model("users", userSchema);
module.exports = users;