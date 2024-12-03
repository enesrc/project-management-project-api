const sequelizeConnection = require("../../db/sequelizeConnection.js");
const { DataTypes } = require('sequelize');
const User = require('./User');

const UserProfile = sequelizeConnection.define('UserProfile', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  profile_image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  wallpaper: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true 
  },
  social_links: {
    type: DataTypes.JSON,
    allowNull: true 
  }
}, {
  tableName: 'UserProfiles',
  timestamps: true 
});

User.hasOne(UserProfile, { foreignKey: 'user_id' }); // Bir kullanıcı bir profile sahiptir
UserProfile.belongsTo(User, { foreignKey: 'user_id' }); // Bir profil bir kullanıcıya aittir

module.exports = UserProfile;
