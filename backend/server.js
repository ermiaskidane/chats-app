const express = require("express")
const socketio = require("socket.io")
const http = require("http")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")

dotenv.config()

connectDB()

const app = express()
const server = http.createServer(app)
// const io = new Server(httpServer);
const io = socketio(server)


// help to access json format in the req.body
app.use(express.json())

// app.use("/", (req, res) => {
//     res.send("hello world")
// })

app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`))
