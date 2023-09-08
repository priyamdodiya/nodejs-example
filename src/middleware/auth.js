const jwt = require("jsonwebtoken")
const User = require("../models/user")
const auth = (req,res,next) =>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        console.log("🚀 ~ file: auth.js:6 ~ auth ~ token:", token)
        const decoded = jwt.verify(token,"thisismyname")
        const user = User.findOne({_id:decoded._id,"tokens.token":token})
        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    }catch(e){
        res.status(401).send({error:"please authenticate"})
    }
}
module.exports = auth

