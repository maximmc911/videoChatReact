import { io } from "socket.io-client";

const options ={
    "force new connection":true,
    reconnectionAttempts: "Infinity",
    timeout: 100,
    transports: ["websocket"]
}

const socket = io(`http://localhost:5173`, options);

export default socket;