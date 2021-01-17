const router = require('express').Router()

let { postRoom, getAllBooking, getSingleBooking } = require('../controllers/adminController')

router.post('/post/room', postRoom)
router.get('/get/all/bookings', getAllBooking)
router.get('/get/single/booking/:bookingId', getSingleBooking)

module.exports = router