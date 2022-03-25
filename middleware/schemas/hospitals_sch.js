const mongoose = require("mongoose");
const hospitalsSchema = mongoose.Schema({
  hospital_id: {
    type: "Number",
    unique: true,
    required: true,
  },
  hospital_nam: String,
  address: String,
  hospital_tel: String,
  service_time: String,
  latitude: Number,
  longitude: Number
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const hospitals = connection.model("hospitals", hospitalsSchema);
module.exports = hospitals;