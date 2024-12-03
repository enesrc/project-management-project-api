const ProjectAnnouncement = require('../models/mysql/ProjectAnnouncement.js');
const Response = require('../utils/response.js');
const APIError = require('../utils/errors.js');

const createProjectAnnouncement = async (req, res) => {
    const { title, shortDescription, longDescription, technologies, startDate } = req.body
    const userId = req.user.id;

    await ProjectAnnouncement.create({
        title,
        shortDescription,
        longDescription,
        startDate,
        userId
    }).then((announcement) => {
        return new Response(201, "Project announcement created successfully", announcement).success(res);
    }).catch((error) => {
        return new Response(400, "Project announcement could not be created", error).error400(res);
    });
}

const getUserProjectAnnouncements = async (req, res) => {
    try {
        const announcements = await ProjectAnnouncement.findAll({
            where: {
                userId: req.user.id
            }
        });
        return new Response(200, "Project announcements fetched successfully", announcements).success(res);
    } catch (error) {
        return new Response(400, "Project announcements could not be fetched", error).error400(res);
    }
}

module.exports = {
    createProjectAnnouncement,
    getUserProjectAnnouncements
}