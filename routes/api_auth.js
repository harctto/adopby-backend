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
      for (let i = 0; i < 7; i++) pr += ~~(Math.random() * 10);
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

router.get('/:uid', async (req, res) => {
  const doc = await Users.findOne({ uid: req.params.uid });
  res.json({
    uid: doc.uid,
    username: doc.username,
    firstname: doc.firstname,
    surname: doc.surname,
    user_tel: doc.user_tel,
    address: doc.address
  });
})

router.post('/edit/:uid', async (req, res) => {
  try {
    const doc = await Users.findOneAndUpdate({ 
      uid: req.params.uid 
    },{
      username: req.body.username,
      address: req.body.address,
      user_tel: req.body.user_tel
    });
    
    res.json({
      result: "update success",
      username: req.body.username,
      user_tel: req.body.user_tel,
      address: req.body.address
    });
  } catch (err) {
    res.json({ result: "update failed", detail: err });
    console.log(err)
  }
})

module.exports = router;