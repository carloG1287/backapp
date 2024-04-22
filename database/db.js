import {Sequelize} from "sequelize";
import 'dotenv/config'

const db = new Sequelize( process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number.parseInt(process.env.DB_PORT)
});

export default db
