const RoomBookingSchema = require('../models/Booking')

roomBooking = async(req, res) => {
    try {
        let { customerName, email, phoneNo, address, duration, paymentStatus, roomDescription } = req.body

        let roomBookingSchema = new RoomBookingSchema({
            customerName,
            email,
            phoneNo,
            address,
            duration,
            paymentStatus,
            roomDescription
        })

        let bookingRooms = await roomBookingSchema.save()

        res.status(201).json({
            bookingRooms
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    roomBooking
}