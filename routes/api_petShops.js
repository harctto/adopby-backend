const express = require("express");
const router = express.Router();
const petshops = require("./schemas/petShops_sch");

router.get("/", async (req, res) => {
    const doc = await petshops.find({});
    res.json(doc);
});

router.get("/:shopID", async (req, res) => {
    const doc = await petshops.find({ shop_id: parseInt(req.params.shopID) });
    res.json(doc);
});

module.exports = router;