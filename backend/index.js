const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/welcome', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/react/question', (req, res) => {
  res.send('What is a React Component?');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});