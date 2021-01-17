const router = require('express').Router()
let { getAllRoomInfo, getSingleRoom } = require('../controllers/customerController')

router.get('/rooms', getAllRoomInfo)
router.get('/room/details/:roomId', getSingleRoom)

module.exports = router