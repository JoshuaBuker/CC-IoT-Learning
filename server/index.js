const express = require('express');
const cors = require('cors');
const expressWs = require('express-ws');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

expressWs(app);



let chatMessageClients = [];
let doorClients = [];

app.ws('/messages', (ws, req) => {
  console.log('New client connected to /messages');
  chatMessageClients.push(ws);

  // Handle messages received from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    chatMessageClients.forEach(client => {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected from /messages');
    chatMessageClients = chatMessageClients.filter(client => client !== ws);
  });
});

app.ws('/door', (ws, req) => {
  console.log('New client connected to /door');
  doorClients.push(ws);

  // Handle messages received from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    doorClients.forEach(client => {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected from /door');
    doorClients = doorClients.filter(client => client !== ws);
  });
})

app.get('/', (req, res) => {
  res.send("Get Request Successful!");
});

app.post("/messages", async (req, res) => {
  const message = req.body.message;

  // Broadcast message to all connected clients
  await chatMessageClients.forEach(client => {
    if (client.readyState === client.OPEN) {
      client.send(message);
    }
  });
  res.send("Success");
});

app.listen(port, () => {
  console.log("Server running on port 3001.")
});