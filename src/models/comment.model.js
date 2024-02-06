const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    comment: {
        type: String,
        require: true
    },
    image: {
        type: String
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('blog', blogSchema)