const { ObjectId } = require("mongodb");
const dbconnect = require("./mongodb");

const read = async () =>{
    const db = await dbconnect()
    const result = await db.find({name:"fenil khokhariya"}).toArray((error,users)=>{
        console.log(users)
    })
}
read()