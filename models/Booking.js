const mongoose = require('mongoose')
const { Schema, model } = mongoose


const roomBookingSchema = new Schema({
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    duration: {
        type: Object
    },
    paymentStatus: {
        type: String,
        required: true
    },
    roomDescription: [{
        roomName: {
            type: String,
            required: true
        },
        costPerDay: {
            type: Number,
            required: true
        }
    }]
})

const RoomBookingSchema = model('RoomBookingSchema', roomBookingSchema)
module.exports = RoomBookingSchema;