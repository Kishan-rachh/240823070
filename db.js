const sequelize = require("sequelize");

//connection
const db = new sequelize("mca", "root", "", {
host: "localhost",
dialect: "mysql",
});

//test connection
db.authenticate()
.then(() => {
console.log("Connection has been established successfully.");
})
.catch((err) => {
console.error("Unable to connect to the database:", err);
});
module.exports = db;