const express = require('express');

const { InfoController } = require('../../controllers');
const emailRouter= require('./email-routes');

const router = express.Router();
router.use("/tickets",emailRouter);

router.get('/info', InfoController.info);

module.exports = router;