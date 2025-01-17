const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Blog', blogSchema)