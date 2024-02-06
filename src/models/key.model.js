const mongoose = require('mongoose')

const keySchema = mongoose.Schema({
    publicKey: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('key', keySchema)