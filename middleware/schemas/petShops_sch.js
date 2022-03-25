const mongoose = require("mongoose");
const petShopsSchema = mongoose.Schema({
  shop_id: {
    type: "Number",
    unique: true,
    required: true,
  },
  shop_name: String,
  address: String,
  shop_tel: String,
  service_time: String,
  latitude: Number,
  longitude: Number
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const petshops = connection.model("petshops", petShopsSchema);
module.exports = petshops;