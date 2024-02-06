const express = require('express')
const app = express()
const cors = require('cors')

require('./db/mongoose.db')

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

app.use('/api', require('./routes/index.route'))
app.use(require('./cores/errorhandle.core'))
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack,
        message: error.message || 'Internal Server Error'
    });
});
module.exports = app