"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.belongsTo(models.Cart);
        }
    }
    ;
    User.init({
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        email: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        firstName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        age: {
            allowNull: true,
            type: DataTypes.NUMBER,
        },
        country: {
            allowNull: true,
            type: DataTypes.TEXT,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
// import { sequelize } from './database';
// import { Model, Optional, DataTypes } from 'sequelize';
// interface UserAttributes {
//   id: string;
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   age: number;
//   country: string;
//   isAdmin: boolean;
// };
// interface UserCreationAttributes
//   extends Optional<UserAttributes, 'id'> {}
// interface UserInstance
//   extends Model<UserAttributes, UserCreationAttributes>,
//     UserAttributes {
//       createdAt?: Date;
//       updatedAt?: Date;
//     }
// const User = sequelize.define<UserInstance>(
//     'User',
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: false,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         unique: true,
//       },
//       email: {
//         allowNull: false,
//         type: DataTypes.TEXT,
//       },
//       password: {
//         allowNull: false,
//         type: DataTypes.TEXT,
//       },
//       firstName: {
//         allowNull: false,
//         type: DataTypes.TEXT,
//       },
//       lastName: {
//         allowNull: false,
//         type: DataTypes.TEXT,
//       },
//       age: {
//         allowNull: true,
//         type: DataTypes.NUMBER,
//       },
//       country: {
//         allowNull: true,
//         type: DataTypes.TEXT,
//       },
//       isAdmin: {
//         type: DataTypes.BOOLEAN,
//       },
//     }
//   );
//   export default User;
