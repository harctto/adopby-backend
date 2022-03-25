const express = require("express");
const router = express.Router();
const Hospitals = require("../middleware/schemas/hospitals_sch");

router.get("/", async (req, res) => {
    const doc = await Hospitals.find({});
    res.json(doc);
});

router.get("/:hospitalID", async (req, res) => {
    const doc = await Hospitals.find({ shop_id: parseInt(req.params.shopID) });
    res.json(doc);
});

module.exports = router;