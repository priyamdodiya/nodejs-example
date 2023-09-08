const dbconnect = require("./mongodb");
const updateData = async () => {
  const db = await dbconnect();
  const data = await db.updateMany(
    {
      name: "hardik nakrani",
    },
    {
      $set: { name: "mohan pyare" },
    }
  );
  console.log("🚀 ~ file: update.js:9 ~ updateData ~ data:", data);
};

updateData();
