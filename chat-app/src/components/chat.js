import React, {useState, useEffect} from "react"
import "./chat.scss"

const Chat = () => {


    return (
        <div className="chat">
            <div className="chat__title">
                <div className="chat__title--content">
                    <h2>ChatApp</h2>
                    <a href="#">Leave Group</a>
                </div>
            </div>
            <div className="chat__user">
                <div className="chat__user--detail">
                    <h3>Room Name</h3>
                    <h2>JS</h2>
                    <h3>Users</h3>
                    <ul>
                        <li>eri</li>
                        <li>tom</li>
                        <li>chris</li>
                        <li>jorg</li>
                    </ul>
                </div>
                <div className="chat__user--message">
                    <ul>
                        <li>hello bob</li>
                        <li>hello chris</li>
                        <li>do you like this style</li>
                        <li>oww chris it is lovely great work</li>
                        <li>thanks bob</li>
                    </ul>
                </div>
            </div>
            <div className="chat__post">
                <form>
                    <input 
                    type="text"
                    placeholder="Enter Messsage"
                    required
                    autoComplete="off"
                     />
                </form>
                <button className="btn--user">Send</button>
            </div>
        </div>
    )
}

export default Chat