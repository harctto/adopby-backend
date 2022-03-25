const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Users = require("../middleware/schemas/users_sch")

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const doc = await Users.findOne({ username });
  
    if (doc) {
      const isPasswordValid = await bcrypt.compare(password, doc.password);
      if (isPasswordValid) { 
        res.json({ 
            result: "success", 
            message: "login successfully",
            uid: doc.uid,
            username: doc.username,
            firstname: doc.firstname,
            surname: doc.surname,
            user_tel: doc.user_tel,
            address: doc.address
        });
      } else {
        res.json({ result: "failed", message: "invalid password" });
      }
    } else {
      res.json({ result: "failed", message: "invalid username" });
    }
})

router.post("/register", async (req, res) => {
    try {
        //Gen method
        const uidGenerator = (pr = "ADB") => {
            for(let i=0; i<7; i++) pr += ~~(Math.random() * 10);
            return pr;
        };
        req.body.password = await bcrypt.hash(req.body.password, 8);
        req.body.uid = await uidGenerator()
        //create to db
        const doc = await Users.create(req.body);
        res.json({ result: "success", detail: doc });
    } catch (err) {
        res.json({ result: "failed", detail: err });
    }
});

module.exports = router;