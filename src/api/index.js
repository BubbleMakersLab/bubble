import openSocket from "socket.io-client";

console.log(process.env.REACT_APP_SERVER_URI);
const socket = openSocket(process.env.REACT_APP_SERVER_URI);

function subscribeToTimer(cb) {
  socket.on("timer", timestamp => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}

function sendChatMessage(message) {
  socket.emit("chat message", message);
}

function receiveChatMessage(cb) {
  socket.on("chat message", message => cb(null, message));
}
export { subscribeToTimer, sendChatMessage, receiveChatMessage };
