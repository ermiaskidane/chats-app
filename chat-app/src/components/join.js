import React, { useState, useEffect} from "react"
import axios from "axios";
import './join.scss';

function Join() {

  const [name, setName] = useState("")
  const [room, setRoom] = useState("")  

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log(name, room)
    const config = {
        headers: {
        "Content-Type": "application/json"
      }
    }

    const { data } = await axios.post("/api/users", { name, room}, config )

    return data
    // alert(`${data} data has been successfully post`)
  } 

  return (
    <div className="app">
      <div className="app__auth">
        <div className="app__auth--content">
          <div className="app__auth--title">
            <h2>ChatApp</h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className="app__form">
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              id="username" 
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username..."
              required/>
            </div>

            <div className="app__form">
            <label htmlFor="room">Room</label>
              <input
              type="text"
              id="room"
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Enter Room..."
              required
              />
            </div>
            <button type="submit" className="btn">Join Chat</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
