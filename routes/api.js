const express = require("express");
const router = express.Router();

router.use("/auth", require("./api_auth"))
router.use("/petshops", require("./api_petShops"));
router.use("/hospitals", require("./api_hospitals"))

module.exports = router;