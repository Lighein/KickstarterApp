'use strict';

import {
  Model, UUIDV4
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
      User.hasOne(models.Sessions)
      User.hasMany(models.Products)
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
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    country: {
      allowNull: true,
      type: DataTypes.STRING,
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



