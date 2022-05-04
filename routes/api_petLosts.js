const express = require("express");
const router = express.Router();
const PetLosts = require("../middleware/schemas/petLost_sch");
const { route } = require("./api_auth");

router.get("/", async (req, res) => {
    const doc = await PetLosts.find({});
    res.json(doc);
});

router.get("/:pet_id", async (req, res) => {
    const doc = await PetLosts.find({ pet_id: req.params.pet_id });
    res.json(doc);
});

router.post("/:uid", async (req, res) => {
    try {
        //Gen method
        const uidGenerator = (pr = "POL") => {
            for(let i=0; i<7; i++) pr += ~~(Math.random() * 10);
            return pr;
        };
        req.body.pet_id = await uidGenerator()
        req.body.uid = await req.params.uid
        //create to db
        const doc = await PetLosts.create(req.body);
        res.json({ result: "success", detail: doc });
    } catch (err) {
        res.json({ result: "failed", detail: err });
    }
});

router.post('/edit/:pet_id', async (req, res) => {
    try {
        await PetLosts.findOneAndUpdate({
            pet_id: req.params.pet_id
        },(req.body))
        res.json({ result: "success", detail: req.body });
    } catch (err) {
        res.json({ result: "failed", detail: err });
    }
})

module.exports = router;