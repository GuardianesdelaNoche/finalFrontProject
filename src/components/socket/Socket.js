import io from "socket.io-client";

let socket = io("//4events:5000");

export default socket;