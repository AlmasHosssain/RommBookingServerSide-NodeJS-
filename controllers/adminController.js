const PostProductSchema = require('../models/Admin')
const RoomBookingSchema = require('../models/Booking');

postRoom = async(req, res) => {
    try {
        let { roomName, roomType, price, description, mainImage, subImage } = req.body;

        let postRoom = new PostProductSchema({
            roomName,
            roomType,
            price,
            description,
            mainImage,
            subImage
        })

        let postedRoom = await postRoom.save()
        res.status(201).json({
            postedRoom
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

getAllBooking = async(req, res) => {
    try {
        let allBookings = await RoomBookingSchema.find()
        res.status(200).json(allBookings)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

getSingleBooking = async(req, res) => {
    try {
        let { bookingId } = req.params;
        let getSingleBookingDetailsInfo = await RoomBookingSchema.findOne({ _id: bookingId })
        res.status(200).json(getSingleBookingDetailsInfo)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    postRoom,
    getAllBooking,
    getSingleBooking
}