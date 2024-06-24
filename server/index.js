const express = require('express');
const cors = require('cors');
const expressWs = require('express-ws');

const app = express();
const port = 3001;

expressWs(app);

app.ws('/socket', (ws, req) => {
  console.log('New client connected to /ws');

  // Handle messages received from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Echo the message back to the client
    ws.send(`Server says: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected from /ws');
  });
});

app.get('/', (req, res) => {
  res.send("Get Request Successful!");
});

app.listen(port, () => {
  console.log("Server running on port 3001.")
});