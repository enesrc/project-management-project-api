const express = require('express');
const router = express.Router();
const { createProjectAnnouncement, getUserProjectAnnouncements } = require("../controllers/projectAnnouncementController.js");
const { tokenCheck } = require('../middlewares/auth.js');

router.post('/project-announcements', tokenCheck, createProjectAnnouncement);
router.get('/user-project-announcements', tokenCheck, getUserProjectAnnouncements);

module.exports = router;