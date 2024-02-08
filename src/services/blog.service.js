const userSchema = require('../models/user.model')
const blogSchema = require('../models/blog.model')

exports.createBlog = async (userId, { content }, image) => {
    const arrimage = await Promise.all(image.map((img) => {
        return img.path
    }))
    await blogSchema.create({
        content, image: arrimage, user: userId
    })
    return {
        message: 'Tạo blog thành công'
    }
}

exports.updateBlog = async ({ blogId, content }, image) => {
    const findBlog = await blogSchema.findOne({ _id: blogId })
    const arrimage = await Promise.all(image.map((img) => {
        return img.path
    }))
    await blogSchema.findOneAndUpdate({ _id: blogId }, {
        $set: {
            content: content ? content : findBlog.content,
            image: arrimage.length > 0 ? arrimage : findBlog.image
        }
    })
    return {
        message: 'Update thành công'
    }
}
exports.deleteBlog = async ({ blogId }) => {
    await blogSchema.findOneAndDelete({ _id: blogId })
    return {
        message: 'Delete thành công'
    }
}
exports.getAllBlog = async () => {
    const blog = await blogSchema.find()
    return {
        blog
    }
}
exports.getAllBlogForUser = async (userId) => {
    const blog = await blogSchema.find({ user: userId })
    return {
        blog
    }
}