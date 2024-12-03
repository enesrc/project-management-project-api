const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');

const Technology = sequelizeConnection.define('technology', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'technologies',
    timestamps: false
});

module.exports = Technology;