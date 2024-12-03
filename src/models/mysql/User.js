const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');

const User = sequelizeConnection.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },  
  nickname: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
    validate: {
      is: /^[0-9\-\+\(\)\s]*$/
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM('e', 'k', 'd'),
    allowNull: false
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'Users',
  timestamps: true
});

module.exports = User;