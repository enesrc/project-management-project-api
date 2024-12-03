const express = require('express');
const router = express.Router();
const {login, register, me, logout} = require("../controllers/authController")
const { tokenCheck } = require('../middlewares/auth');

router.post("/register", register)
router.post("/login", login)
router.get('/me', tokenCheck, me)
router.get('/logout', logout)

module.exports = router;