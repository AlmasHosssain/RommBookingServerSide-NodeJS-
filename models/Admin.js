const mongoose = require('mongoose')
const { Schema, model } = mongoose


const adminProductPostSchema = new Schema({
    roomName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    subImage: [{
        subImageUrl: {
            type: String
        }
    }]
})

const PostProductSchema = model('PostProductSchema', adminProductPostSchema)
module.exports = PostProductSchema;