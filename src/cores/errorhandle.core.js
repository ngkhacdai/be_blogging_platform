const { sendErrorResponse } = require('../cores/sendrespone.core');

const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    if (!res || !res.status) {
        console.error('Response object is undefined or does not have status method');
        return next(err); // Tiếp tục chuyển lỗi cho middleware xử lý lỗi tiếp theo
    }
    sendErrorResponse({ message: 'Internal Server Error' }).send(res); // Không gọi next() ở đây
};

module.exports = errorHandlingMiddleware;
