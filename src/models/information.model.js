const mongoose = require('mongoose')

const informationSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true,
    },
    born: {
        type: String,
    },
    sex: {
        type: String,
    },
    avatar: {
        type: String,
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('information', informationSchema)