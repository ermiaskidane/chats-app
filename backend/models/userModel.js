const mongoose = require("mongoose")

const chatSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        room: {
            type: String,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

const Chatter = mongoose.model('Chatter', chatSchema)

module.exports = Chatter