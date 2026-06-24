import mysql2 from "mysql2/promise"

export const db=mysql2.createPool({
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE
})