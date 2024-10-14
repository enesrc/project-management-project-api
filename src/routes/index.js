const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);

router.get("/", (req, res) => {
    res.send("Main Page Test")
})

module.exports = router;