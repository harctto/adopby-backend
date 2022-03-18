const mongoose = require("mongoose");
const hospitalsSchema = mongoose.Schema({
  hospital_id: {
    type: "Number",
    unique: true,
    required: true,
  },
  hospital_name: {
    type: "String",
  },
  address: {
    type: "String",
  },
  hospital_tel: {
    type: "String",
  },
  service_time: {
    type: "String",
  },
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const hospitals = connection.model("hospitals", hospitalsSchema);
module.exports = hospitals;