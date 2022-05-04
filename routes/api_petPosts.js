const express = require("express");
const router = express.Router();
const PetPosts = require("../middleware/schemas/petPost_sch");

router.get("/", async (req, res) => {
    const doc = await PetPosts.find({});
    res.json(doc);
});

router.get("/:post_id", async (req, res) => {
    const doc = await PetPosts.find({ post_id: req.params.post_id });
    res.json(doc);
});

router.post("/:uid", async (req, res) => {
    try {
        //Gen method
        const uidGenerator = (pr = "POS") => {
            for(let i=0; i<7; i++) pr += ~~(Math.random() * 10);
            return pr;
        };
        req.body.post_id = await uidGenerator()
        req.body.uid = await req.params.uid
        //create to db
        const doc = await PetPosts.create(req.body);
        res.json({ result: "success", detail: doc });
    } catch (err) {
        res.json({ result: "failed", detail: err });
    }
});

router.post('/edit/:post_id', async (req, res) => {
    try {
        await PetPosts.findOneAndUpdate({
            post_id: req.params.post_id
        },(req.body))
        res.json({ result: "success", detail: req.body });
    } catch (err) {
        res.json({ result: "failed", detail: err });
    }
})

module.exports = router;