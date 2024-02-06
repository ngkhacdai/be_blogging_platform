const mongoose = require('mongoose')

const mongooseURL = process.env.mongooseURL || 'mongodb+srv://ngkhacdai:a012675921@assignmentmob402.mbfbglm.mongodb.net/bloggingplatform'

mongoose.connect(mongooseURL).then(() => {
    console.log('connect mongoose successfully');
}).catch(err => {
    console.log(err);
})

module.exports = mongoose