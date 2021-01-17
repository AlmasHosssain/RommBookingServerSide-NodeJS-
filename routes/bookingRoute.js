const router = require('express').Router()
let { roomBooking } = require('../controllers/bookingController')

router.post('/booking', roomBooking)

module.exports = router