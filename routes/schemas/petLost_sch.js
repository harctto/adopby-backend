const mongoose = require("mongoose");
const petLostSchema = mongoose.Schema({
  pet_id: {
    type: "String",
    unique: true,
    required: true,
  },
  pet_type: String,
  pet_color: String,
  pet_sex: String,
  description: String,
  price: String,
  img_url: String,
  last_seen: {
      type: Date,
      default: Date.now
  },
  date_create: {
    type: Date,
    default: Date.now
}
});

const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const petlosts = connection.model("petlosts", petLostSchema);
module.exports = petlosts;