"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '../../config/config.js')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
    .readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
})
    .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
exports.default = db;
// import Session from './Session';
// import User from './User';
// import Cart from './Cart';
// import Category from './Category';
// import Products from './Products';
// import db from './database'
// User.hasOne(Session, {
//   sourceKey: 'id',
//   foreignKey: 'user_id',
//   as: 'session'
// });
// Session.belongsTo(User, {
//   foreignKey: 'user_id',
//   as: 'user'
// });
// Session.hasOne(Cart, {
//   sourceKey: 'id',
//   foreignKey: 'session_id',
//   as: 'session'
// });
// Cart.belongsTo(Session, {
//   foreignKey: 'user_id',
//   as: 'user'
// });
// Category.hasMany(Products, {
//   sourceKey: 'id',
//   foreignKey: 'category_id',
//   as: 'category'
// });
// module.exports = {
//   db,
//   Category, 
//   Products,
//   Session,
//   Cart,
//   User,
// }
