const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        handle: {
            type: String,
            unique: true,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("post", postSchema)