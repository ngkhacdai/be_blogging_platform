const jwt = require('jsonwebtoken');
const { sendAuthErrorResponse } = require('../cores/sendrespone.core');
const userSchema = require('../models/user.model');

const checkAuth = async (req, res, next) => {
    try {
        const userId = req.headers.userid;
        if (!userId) {
            return sendAuthErrorResponse({ message: 'Unauthorized: User ID not provided', statusCode: 401 }).send(res);
        }

        const findUser = await userSchema.findOne({ _id: userId }).populate('key');
        if (!findUser) {
            return sendAuthErrorResponse({ message: 'Unauthorized: User ID not provided', statusCode: 401 }).send(res);
        }

        const accessToken = req.headers.authrization;
        if (!accessToken) {
            return sendAuthErrorResponse({ message: 'Unauthorized: User ID not provided', statusCode: 401 }).send(res);
        }

        const checkAccessToken = await jwt.verify(accessToken, findUser.key.publicKey);
        if (!checkAccessToken) {
            return sendAuthErrorResponse({ message: 'Unauthorized: User ID not provided', statusCode: 401 }).send(res);
        }

        req.user = userId;
        next();
    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        const errorResponse = sendAuthErrorResponse({ message: 'Unauthorized: Unexpected error', statusCode: 500 });
        return res.status(errorResponse.status || 500).json(errorResponse.message);
    }
};

module.exports = checkAuth;
