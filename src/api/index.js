import openSocket from "socket.io-client";

const socket = openSocket(process.env.REACT_APP_SERVER_URI);

function sendChatMessage(message) {
  socket.emit("chat message", message);
}

function getChatHistory() {
  socket.emit("chat history");
}

function receiveChatMessage(cb) {
  socket.on("chat message", message => cb(null, message));
}

function receiveHistory(cb) {
  socket.on("chat history", messages => cb(null, messages));
}
export { sendChatMessage, receiveChatMessage, receiveHistory, getChatHistory };
