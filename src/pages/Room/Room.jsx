import React from 'react'
import { useParams } from 'react-router'
import useWebRTC, { LOCAL_VIDEO } from '../../hooks/useWebRTC';

const Room = () => {
   const {id:roomID} = useParams();
   const {clients, provideMediaRef} = useWebRTC(roomID)
   console.log(roomID);
   console.log(clients);
  return (
    <>
    {clients.map((clientID) =>{
        return(
            <div key={clientID}>
                <video
                ref={instance =>{
                    provideMediaRef(clientID, instance)
                }}
                autoPlay
                playsInline
                muted={clientID === LOCAL_VIDEO}
                />
            </div>
        )
    })}
    </>
  )
}

export default Room