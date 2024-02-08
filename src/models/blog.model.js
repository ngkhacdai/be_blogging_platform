const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    image: [{
        type: String,
    }],
    comment: {
        type: mongoose.Types.ObjectId,
        ref: 'comment'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('blog', blogSchema)