'use strict';

import {
  Model
}  from 'sequelize';

interface UserAttributes {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  country: string;
  isAdmin: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> 
    implements UserAttributes{
        id!: number;
        email!: string;
        password!: string;
        firstName!: string;
        lastName!: string;
        age!: number;
        country!: string;
        isAdmin!: boolean;

    static associate(models: any) {
      User.hasOne(models.Session)
    }
  }

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



