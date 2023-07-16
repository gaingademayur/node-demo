const mysql = require("mysql")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Mayur@123",
    database: "newdb",
    connectionLimit: 10
})

module.exports = pool