const userSchema = require('../models/user.model')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const keySchema = require('../models/key.model')
const { sendErrorResponse } = require('../cores/sendrespone.core')
const { createToken } = require('../auth/createtoken.auth')

exports.signup = async ({ email, password }) => {
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const publicKey = await crypto.randomBytes(32).toString('hex')
        const key = await keySchema.create({ publicKey })
        const newUser = await userSchema.create({
            email, password: hashPassword, key: key._id
        })
        return {
            message: 'Đăng ký thành công'
        }
    } catch (error) {
        return error
    }
}

exports.login = async ({ email, password }) => {
    const findUser = await userSchema.findOne({ email: email }).populate('key')
    if (!findUser) {
        throw new sendErrorResponse('User not found', 401, 'User not found')
    }
    const checkPassword = await bcrypt.compare(password, findUser.password)
    if (!checkPassword) throw new sendErrorResponse('Password is incorrect', 401, 'Password is incorrect')
    const user = { userId: findUser._id, email: findUser.email }
    const accessToken = await createToken(user, findUser.key.publicKey)
    return {
        message: 'Login successful',
        accessToken,
        userId: findUser._id
    }
}