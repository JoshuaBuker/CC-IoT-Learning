const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Get Request Successful!");
});

app.listen(port, () => {
  console.log("Server running on port 3001.")
});