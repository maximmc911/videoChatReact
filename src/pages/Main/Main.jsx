import React, { useEffect, useState } from 'react'
import socket from '../../socket'
import ACTIONS from '../../socket/actions';
const Main = () => {
const [rooms, updateRooms] = useState([]);
useEffect(() =>{
    socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) =>{
        updateRooms(rooms);
    });
}, [])

  return (
    <div>Main</div>
  )
}

export default Main