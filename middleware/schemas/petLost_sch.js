const mongoose = require("mongoose");
const petLostSchema = mongoose.Schema({
  pet_id: {
    type: "String",
    index: true,
    unique: true
  },
  pet_name: String,
  pet_type: String,
  pet_color: String,
  pet_sex: String,
  pet_age: String,
  description: String,
  pet_address: String,
  status: {
    type: String,
    default: "กำลังหาบ้าน"
  },
  img_url: String,
  last_seen: String,
  date_create: {
    type: Date,
    default: Date.now
  },
  // user who post
  uid: String
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const petlosts = connection.model("petlosts", petLostSchema);
module.exports = petlosts;