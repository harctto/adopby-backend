const express = require("express");
const router = express.Router();
const hospitals = require("./schemas/hospitals_sch");

router.get("/", async (req, res) => {
    const doc = await hospitals.find({});
    res.json(doc);
});

router.get("/:hospitalID", async (req, res) => {
    const doc = await hospitals.find({ shop_id: parseInt(req.params.shopID) });
    res.json(doc);
});

module.exports = router;