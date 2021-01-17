const PostProductSchema = require('../models/Admin')

getAllRoomInfo = async(req, res) => {
    try {
        let allRooms = await PostProductSchema.find()
        res.status(200).json(allRooms)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

getSingleRoom = async(req, res) => {
    try {
        let { roomId } = req.params;
        let getSingleRoomDetailsInfo = await PostProductSchema.findOne({ _id: roomId })
        res.status(200).json(getSingleRoomDetailsInfo)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllRoomInfo,
    getSingleRoom
}