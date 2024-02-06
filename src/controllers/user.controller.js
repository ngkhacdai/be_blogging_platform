const userService = require('../services/user.service')
const { sendSuccessResponse } = require('../cores/sendrespone.core')

exports.information = async (req, res) => {
    const avatar = req.file.path
    sendSuccessResponse({
        metadata:
            await userService.information(avatar, req.user, req.body)
    }).send(res)
}