const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller')
const checkAuth = require('../../auth/checktoken.auth')
const upload = require('../../utils/multer.ultil')

router.post('/information', checkAuth, upload.single('avatar'), userController.information)


module.exports = router