"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
;
const Products = database_1.sequelize.define('Products', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        unique: true,
    },
    user_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
    category_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    },
    created: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
    status: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
        defaultValue: 'Need more investments',
        validate: { isIn: [['Need more investments', "Implementation", "Renovating", "Waiting for approvement"]] },
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    description: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT,
    },
    total_amount: {
        allowNull: true,
        type: sequelize_1.DataTypes.FLOAT,
    },
});
exports.default = Products;
