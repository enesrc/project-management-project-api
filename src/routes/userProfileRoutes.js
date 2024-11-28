const express = require('express');
const router = express.Router();
const {getProfileData} = require("../controllers/userProfileController.js")

router.get('/:nickname', getProfileData);

module.exports = router;