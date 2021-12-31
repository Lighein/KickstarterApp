'use strict';

import {
  Model, UUIDV4
}  from 'sequelize';


import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import axios from 'axios';
import db from '../models';


const SALT_ROUNDS = 5;

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

    correctPassword!: (candidatePwd: any) => any;
    generateToken!: () => any;

    static authenticate = async ({ email, password })=>{
      console.log(email, password);
      const user = await this.findOne({where: { email }});
      console.log(user)
      if (!user || !(await user.correctPassword(password))) {
        const error: any = Error('Incorrect email/password');
        error.status = 401;
        throw error;
      }
      return user.generateToken();
    };

    static findByToken = async function(token: any) {
      try {
        
        const resp: any = jwt.verify(token, "secret");
        const user = db.User.findByPk(resp.id)
        if (!user) {
          throw 'nooo'
        }
        return user
      } catch (ex) {
        const error: any = Error('bad token')
        error.status = 401
        throw error
      }
    };

    static associate(models: any) {
      User.hasOne(models.Sessions)
      User.hasMany(models.Products)
    }
  }

  const UsersTable = User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
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
    hooks: {
      beforeCreate: async function(user){
          if (user.changed('password')) {
          user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
        }
      },
      beforeUpdate: async function(user){
        if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
        }
      },
      beforeBulkCreate: function(users){
        Promise.all(users.map(async user=>{
          if (user.changed('password')) {
            user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
          }
        }))
      },
    }
  });

  UsersTable.prototype.correctPassword = function(candidatePwd) {
    return bcrypt.compare(candidatePwd, this.password);
  }
  
  User.prototype.generateToken = function() {
    return jwt.sign({id: this.id}, "secret")
  }

  return User;
};
