"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Session extends sequelize_1.Model {
        static associate(models) {
            Session.belongsTo(models.User);
            Session.hasMany(models.Cart);
        }
    }
    ;
    Session.init({
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        user_id: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        total: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'empty',
            validate: { isIn: [["cart", "donated", "empty"]] },
        },
        date: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    }, {
        sequelize,
        modelName: 'Session',
    });
    return Session;
};
// import { sequelize } from './database';
// import { Model, Optional, DataTypes } from 'sequelize';
// interface SessionAttributes {
//   id: string;
//   user_id: number;
//   total: number;
//   status: string;
//   date: Date;
// };
// interface SessionCreationAttributes
//   extends Optional<SessionAttributes, 'id'> {}
// interface SessionInstance
//   extends Model<SessionAttributes, SessionCreationAttributes>,
//     SessionAttributes {
//       createdAt?: Date;
//       updatedAt?: Date;
//     }
// const Session = sequelize.define<SessionInstance>(
//     'Session',
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: false,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         unique: true,
//       },
//       user_id: {
//         allowNull: false,
//         type: DataTypes.UUID,
//       },
//       total: {
//         allowNull: false,
//         type: DataTypes.FLOAT,
//       },
//       status: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         defaultValue: 'empty',
//         validate: { isIn: [["cart", "donated", "empty"]] },
//       },
//       date: {
//         allowNull: true,
//         type: DataTypes.DATE,
//       },
//     }
//   );
//   export default Session
