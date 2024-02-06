const express = require('express');
const router = express.Router();
const accessController = require('../../controllers/access.controller');

router.post('/signup', accessController.signup)
router.post('/login', accessController.login)


module.exports = router