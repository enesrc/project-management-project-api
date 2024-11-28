const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');
const User = require('./User');

const ProjectAnnouncement = sequelizeConnection.define('ProjectAnnouncement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdBy: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
}, {
    tableName: 'ProjectAnnouncements',
    timestamps: true
});

User.hasMany(ProjectAnnouncement, { foreignKey: 'createdBy' });
ProjectAnnouncement.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = ProjectAnnouncement;