const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');

const User = sequelizeConnection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            is: /^[0-9]+$/i
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['male', 'female', 'other']]
        }
    },
    birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    profileImageUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User;