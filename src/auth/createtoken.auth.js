const jwt = require('jsonwebtoken')


const createToken = async (user, publicKey) => {
    const accessToken = await jwt.sign(user, publicKey, { expiresIn: '30 days' })
    return accessToken
}

module.exports = { createToken }