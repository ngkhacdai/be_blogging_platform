const accessService = require('../services/access.service')
const { sendSuccessResponse, sendErrorResponse } = require('../cores/sendrespone.core')
const userSchema = require('../models/user.model')


exports.signup = async (req, res) => {
    const findUser = await userSchema.findOne({ email: req.body.email })
    if (findUser) {
        return sendErrorResponse({ message: 'Email đã tồn tại' }).send(res)
    }
    sendSuccessResponse({
        metadata: await accessService.signup(req.body)
    }).send(res)
}
exports.login = async (req, res) => {
    sendSuccessResponse({
        metadata: await accessService.login(req.body)
    }).send(res)
}