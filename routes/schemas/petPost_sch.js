const mongoose = require("mongoose");
const petPostSchema = mongoose.Schema({
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
const petposts = connection.model("petposts", petPostSchema);
module.exports = petposts;