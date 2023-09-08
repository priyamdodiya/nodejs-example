const dbconnect = require("./mongodb")

const deleteData = async () =>{
    const db = await dbconnect()
    const result = await db.deleteMany({name:"dsdsd"})
    console.log("🚀 ~ file: delete.js:5 ~ deleteData ~ db:", result)
    if(result.acknowledged){
        console.log("record deleted")
    }
}
deleteData()



// const dbconnect = require("./mongodb")
// const deleteData = async () =>{
//     const db = await dbconnect()
//     const result = await db.deleteMany({age:"5"}).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }
// deleteData()