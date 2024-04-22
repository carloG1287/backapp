import {Sequelize} from "sequelize";
import 'dotenv/config'

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST)
const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

export default db