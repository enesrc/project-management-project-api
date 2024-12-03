const sequelizeConnection = require('../../db/sequelizeConnection');
const User = require('./User');
const UserCertification = require('./UserCertification');
const UserProject = require('./UserProject');
const ProjectAnnouncement = require('./ProjectAnnouncement');
const UserProfile = require('./UserProfile');
const Technology = require('./Technology');

async function sync() {
    await sequelizeConnection.sync({ alter: true })
        .then(() => {
            console.log('Mysql synchronized');
        })
        .catch((err) => {
            console.error('Synchronizing Error:', err);
        });
}

module.exports = { sync };