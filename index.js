const dbconnect = require("./mongodb")

const main = async () =>{
let data = await dbconnect();
data = await data.find({}).toArray()
console.log("🚀 ~ file: mongodb.js:42 ~ main ~ data:", data)
}
main()