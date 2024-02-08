const express = require('express')
const router = express.Router()

router.use('/user', require('./user/index.user'))
router.use('/access', require('./access/index.access'))
router.use('/blog', require('./blogs/index.blog'))
module.exports = router