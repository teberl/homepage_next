const next = require("next");
const { createServer } = require("http");

const app = require("express")();
const server = createServer(app);
const io = require("socket.io")(server);
const chat = require("./components/chat/channels");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 3000;
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", (socket) => {
  let isUserAdded = false;

  socket.on(chat.emitAddUser, (username) => {
    if (isUserAdded) return;

    isUserAdded = true;
    socket.broadcast.emit(chat.emitAddUser, username);
  });

  socket.on(chat.emitNewMessage, (chatMessage) => {
    socket.broadcast.emit(chat.emitNewMessage, chatMessage);
  });
});

nextApp.prepare().then(() => {
  app.get("*", nextHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
