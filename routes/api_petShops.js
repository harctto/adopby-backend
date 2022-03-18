const express = require("express");
const router = express.Router();
const PetShops = require("./schemas/petShops_sch");

router.get("/", async (req, res) => {
    const doc = await PetShops.find({});
    res.json(doc);
});

router.get("/:shopID", async (req, res) => {
    const doc = await PetShops.find({ shop_id: parseInt(req.params.shopID) });
    res.json(doc);
});

module.exports = router;