const express = require('express');
const controller = require('./domain.controller');

import oauth from '../../components/oauth/auth';

const router = express.Router();

router.get('/', oauth, controller.index);
router.post('/', oauth, controller.create);

module.exports = router;