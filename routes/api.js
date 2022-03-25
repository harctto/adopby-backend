const express = require("express");
const router = express.Router();

router.use("/auth", require("./api_auth"))
router.use("/petshops", require("./api_petShops"));
router.use("/hospitals", require("./api_hospitals"));
router.use("/petposts", require("./api_petPosts"));
router.use("/petlosts", require("./api_petLosts"))

module.exports = router;