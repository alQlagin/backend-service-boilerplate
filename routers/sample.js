const express = require('express');
const middleware = require('../middleware/sample');
const router = module.exports = express.Router();;

router.post('/', middleware.mid2);

router.param('id', middleware.mid1);
router.put('/:id', middleware.mid2);