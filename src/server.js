const PORT = process.env.PORT || 3000;
const WebSocketServer = require("ws").Server; // here we are using WS library
const wss = new WebSocketServer({ port: 9090 });

const clients = []
/* wss.on("connection", (ws) => {
 
  console.log("Connection opened 🚀");
  ws.send("Chat connected 🚀");

  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client != ws) client.send(message);
    });
  });

  ws.on("close", () => {
    console.log("Connection closed 💀");
  });
}); */

wss.on("connection", (connection) => {
    clients.push(connection)

    connection.on('message', (message) =>{
        const data = JSON.parse(message)
        clients.forEach(client => client.send(JSON.stringify(data)))
        console.log(message)
    } )
})