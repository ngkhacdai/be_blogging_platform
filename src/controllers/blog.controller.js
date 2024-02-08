const blogService = require('../services/blog.service')
const { sendSuccessResponse } = require('../cores/sendrespone.core')

exports.createBlog = async (req, res) => {
    const image = req.files
    sendSuccessResponse({
        metadata:
            await blogService.createBlog(req.user, req.body, image)
    }).send(res)
}
exports.updateBlog = async (req, res) => {
    const image = req.files
    sendSuccessResponse({
        metadata:
            await blogService.updateBlog(req.body, image)
    }).send(res)
}
exports.deleteBlog = async (req, res) => {
    sendSuccessResponse({
        metadata:
            await blogService.deleteBlog(req.body)
    }).send(res)
}
exports.getAllBlog = async (req, res) => {
    sendSuccessResponse({
        metadata:
            await blogService.getAllBlog(req.body)
    }).send(res)
}
exports.getAllBlogForUser = async (req, res) => {
    sendSuccessResponse({
        metadata:
            await blogService.getAllBlogForUser(req.user)
    }).send(res)
}