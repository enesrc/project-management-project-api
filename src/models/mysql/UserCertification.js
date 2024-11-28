const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');
const User = require('./User');

const UserCertification = sequelizeConnection.define('UserCertification', {
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
  certificate_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  issued_by: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  issue_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'UserCertifications',
  timestamps: true
});

User.hasMany(UserCertification, { foreignKey: 'user_id' });
UserCertification.belongsTo(User, { foreignKey: 'user_id' });

module.exports = UserCertification;
