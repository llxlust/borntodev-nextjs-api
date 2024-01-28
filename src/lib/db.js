const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
const db = mysql.createConnection({
    host: "localhost",
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

module.exports = db