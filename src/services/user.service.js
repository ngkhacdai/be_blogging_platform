const userSchema = require('../models/user.model')
const informationSChema = require('../models/information.model')
const { sendErrorResponse } = require('../cores/sendrespone.core')

exports.information = async (avatar, userId, { name, phoneNumber, born, sex }) => {
    try {
        const findUser = await userSchema.findOne({ _id: userId })
        if (userId) {
            const infor = await informationSChema.findOneAndUpdate({ _id: findUser.information }, {
                $set: {
                    name, phoneNumber, born, sex, avatar
                }
            })
        } else {
            const newinfor = await informationSChema.create({
                name, phoneNumber, born, sex, avatar
            })
            await userSchema.findOneAndUpdate({ _id: userId }, {
                $set: {
                    information: newinfor
                }
            })
        }

        return {
            message: 'Cập nhật thông tin thành công'
        };
    } catch (error) {
        throw error;
    }
};