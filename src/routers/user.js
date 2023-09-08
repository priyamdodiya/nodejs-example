const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth") 

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAthToken()
    res.status(201).send({user,token});
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req,res)=>{
  try{
  const user = await User.findByCredentials(req.body.email,req.body.password)
  const token = await user.generateAthToken()
  res.send({user,token})
  } catch(e){
    res.status(400).send()
  }
})

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user)
});

router.post("/users/logout",auth,async()=>{
  try{
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  }catch(e){
    res.status(500).send()
  }
})
 
router.post("/users/logoutAll",auth, async (req,res)=>{
  try{
    req.user.tokens = []
    await req.user.save()
    res.send()
  }catch(e){
    res.statu(500).send()
  }
})

router.patch("/users/me",auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid updates" });
  }

  try {
    const user = await User.findById(req.params.id);
    updates.map((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user); 
  } catch (error) {
    res.send(error);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    req.user.remove()
    res.send(req.user)
    } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
