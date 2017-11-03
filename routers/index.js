const express = require('express');
const SampleRouter = require('./sample');
const router = module.exports = express.Router();

router.use('/api/sample', SampleRouter);