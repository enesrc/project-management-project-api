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
    shortDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    longDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    technologies: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
}, {
    tableName: 'projectannouncements',
    timestamps: true
});

User.hasMany(ProjectAnnouncement, { foreignKey: 'createdBy' });
ProjectAnnouncement.belongsTo(User, { foreignKey: 'createdBy' });

module.exports = ProjectAnnouncement;