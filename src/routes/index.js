const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const userProfileRoutes = require('./userProfileRoutes');

router.use(authRoutes);
router.use(userProfileRoutes);

router.get("/", (req, res) => {
    return res.send("Main Page Test")
})

module.exports = router;