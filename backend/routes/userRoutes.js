const express = require("express")
const { joinedUser, getUser} = require("../controllers/userController")
const {protect} = require("../middleware/joinMiddleware")


const router = express.Router()

router.post("/", joinedUser)

router.get("/user", protect, getUser)

module.exports = router
