const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userProfileRoutes = require('./userProfileRoutes');
const projectAnnouncementRoutes = require('./projectAnnouncementRoutes.js');

router.use(projectAnnouncementRoutes);
router.use(authRoutes);
router.use(userProfileRoutes);

router.get("/", (req, res) => {
    return res.send("Main Page Test")
})

module.exports = router;