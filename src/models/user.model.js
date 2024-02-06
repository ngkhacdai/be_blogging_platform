const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    information: {
        type: mongoose.Types.ObjectId,
        ref: 'information'
    },
    key: {
        type: mongoose.Types.ObjectId,
        ref: 'key'
    },
    role: {
        type: String,
        default: 'user',
        enum: ['admin', 'user']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', userSchema)