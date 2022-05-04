const mongoose = require("mongoose");
const petPostSchema = mongoose.Schema({
  post_id: {
    type: "String",
    index: true,
    unique: true,
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
    default: "กำลังหาบ้าน",
  },
  img_url: String,
  date_create: {
    type: Date,
    default: Date.now,
  },
  // user who post
  uid: String,
})
 
const connection = mongoose.createConnection(
  `${process.env.DB_URI_PATH}adopby`
);
const petposts = connection.model("petposts", petPostSchema);
module.exports = petposts;
