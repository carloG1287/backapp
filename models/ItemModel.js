import db from "../database/db.js";
import { DataTypes } from "sequelize";

const itemModel = db.define('item', {
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
    }
})

export default itemModel;