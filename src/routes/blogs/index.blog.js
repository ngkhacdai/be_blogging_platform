const express = require('express');
const router = express.Router();
const blogController = require('../../controllers/blog.controller')
const checkAuth = require('../../auth/checktoken.auth')
const upload = require('../../utils/multer.ultil')

router.post('/', checkAuth, upload.array('image'), blogController.createBlog)
router.put('/', checkAuth, upload.array('image'), blogController.updateBlog)
router.delete('/', checkAuth, blogController.deleteBlog)

//select
router.get('/', checkAuth, blogController.getAllBlog)
router.get('/user', checkAuth, blogController.getAllBlogForUser)

module.exports = router