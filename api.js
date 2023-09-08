const express = require("express")
const dbconnect = require("./mongodb")
const mongodb = require('mongodb');
const app = express()
app.use(express.json())

app.get("/",async (req,res)=>{
    let data = await dbconnect()
    data = await data.find().toArray()
    console.log("🚀 ~ file: api.js:44 ~ app.get ~ data:", data)
    res.send(data)
})

app.post("/",async(req,res)=>{
   let data = await dbconnect()
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put("/:name",async(req,res)=>{
    let data = await dbconnect()
    let result = data.updateOne(
        {name:req.params.name},
        {$set:{email:"manprit@gmail.com"}}
    )
    res.send({name:"mohan"})
})

app.delete("/:id", async (req,res)=>{
    console.log(req.params.id)
    let data = await dbconnect()
    let result = await data.deleteMany({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(4000)
