const asyncHandler = require("express-async-handler")
const generateToken = require("../utilis/generateToken")
const Chatter = require("../models/userModel.js")

// @desc   get user 
// @route  get /api/users/user
// @access Public

const getUser = asyncHandler(async(req, res) => {
    const user = await Chatter.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})


// @desc   Join user 
// @route  POST /api/users
// @access Public

const joinedUser = asyncHandler(async(req, res) => {
    const { name, room} = req.body

    console.log(name, room)

    const userExist = await Chatter.findOne({name, room})

    if(userExist) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await Chatter.create({
        name, room
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            room: user.room,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

exports.joinedUser = joinedUser;
exports.getUser = getUser
