const User = require('./User');
const UserCertification = require('./UserCertification');
const UserProject = require('./UserProject');
const ProjectAnnouncement = require('./ProjectAnnouncement');
const UserProfile = require('./UserProfile');

const sequelizeConnection = require('../../db/sequelizeConnection');

async function syncDatabase() {
    try {
        await sequelizeConnection.sync();
        console.log('Mysql syncronized');
    } catch (err) {
        console.error('Senkronizasyon hatası:', err);
    }
}

module.exports = {
    User,
    UserCertification,
    UserProject,
    ProjectAnnouncement,
    UserProfile,
    syncDatabase
};