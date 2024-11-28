const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');
const User = require('./User');

const UserProject = sequelizeConnection.define('UserProject', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  project_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'UserProjects',
  timestamps: true
});

User.hasMany(UserProject, { foreignKey: 'user_id' });
UserProject.belongsTo(User, { foreignKey: 'user_id' });

module.exports = UserProject;
