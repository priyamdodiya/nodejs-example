const dbconnect = require("./mongodb");
const { ObjectId } = require("mongodb");
  const id = new ObjectId()
  console.log("🚀 ~ file: insert.js:3 ~ id:", id.id)
  console.log(id.getTimestamp())
const insert = async () => {
  const db = await dbconnect();
  const result = await db.insertOne([
    {
      _id:id,
      name: "tirth",
      email: "tirth@gmail.com",
      password: "tirth123",
    }
  ]);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};
insert();
