import {Sequelize} from "sequelize";

const db = new Sequelize('dataBase_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db