const mongoose = require("mongoose");
const petShopsSchema = mongoose.Schema({
  shop_id: {
    type: "Number",
    unique: true,
    required: true,
  },
  shop_name: {
    type: "String",
  },
  address: {
    type: "String",
  },
  shop_tel: {
    type: "String",
  },
  service_time: {
    type: "String",
  },
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const petshops = connection.model("petshops", petShopsSchema);
module.exports = petshops;