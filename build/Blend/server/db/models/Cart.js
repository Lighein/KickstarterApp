"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends sequelize_1.Model {
        static associate(models) {
            Cart.belongsTo(models.Session);
        }
    }
    ;
    Cart.init({
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        product_id: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        session_id: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        amount: {
            allowNull: true,
            type: DataTypes.FLOAT,
        },
    }, {
        sequelize,
        modelName: 'Cart',
    });
    return Cart;
};
// import { sequelize } from './database';
// import { Model, Optional, DataTypes } from 'sequelize';
// interface CartAttributes {
//   id: string;
//   product_id: number;
//   session_id: number;
//   amount: number;
// };
// interface CartCreationAttributes
//   extends Optional<CartAttributes, 'id'> {}
// interface CartInstance
//   extends Model<CartAttributes, CartCreationAttributes>,
//     CartAttributes {
//       createdAt?: Date;
//       updatedAt?: Date;
//     }
// const Cart = sequelize.define<CartInstance>(
//     'Cart',
//     {
//       id: {
//         allowNull: false,
//         autoIncrement: false,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         unique: true,
//       },
//       product_id: {
//         allowNull: false,
//         type: DataTypes.UUID,
//       },
//       session_id: {
//         allowNull: false,
//         type: DataTypes.UUID,
//       },
//       amount: {
//         allowNull: true,
//         type: DataTypes.FLOAT,
//       },
//     }
//   );
//   export default Cart
