import React, { useEffect, useRef, useState } from 'react'
import socket from '../../socket'
import ACTIONS from '../../socket/actions';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
const Main = () => {
const history = useNavigate()
const [rooms, updateRooms] = useState([]);
const rootNode = useRef();

useEffect(() =>{
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) =>{
        if (rootNode.current) {
            
        }
        updateRooms(rooms);
    });
}, [])

  return (
    <div ref={rootNode}>
    <h1>Available Rooms</h1>
    <ul>
        {rooms.map(roomId => (
            <li key={roomId}>
                {roomId}
                <button onClick={()=>{
        history(`/room/${v4(roomId)}`)}}>JOIN ROOM</button>
            </li>
        ))}
    </ul>
    <button onClick={()=>{
        history(`/room/${v4()}`)
    }}>Create New Room</button>
    </div>
  )
}

export default Main