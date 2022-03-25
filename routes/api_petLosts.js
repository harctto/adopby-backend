const express = require("express");
const router = express.Router();
const PetLosts = require("./schemas/petLost_sch");

router.get("/", async (req, res) => {
    const doc = await PetLosts.find({});
    res.json(doc);
});

module.exports = router;