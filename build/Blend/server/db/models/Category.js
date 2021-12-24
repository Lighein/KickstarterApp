"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const sequelize_1 = require("sequelize");
;
const Category = database_1.sequelize.define('Category', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Category;
