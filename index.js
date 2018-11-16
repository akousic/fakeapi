const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.port || 3000;

app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get('/', (req, res) => res.status(200).send("Fake Api"));
app.get('/health', (req, res) => res.status(200).json({ status: 'Up' }));

app.post('/api/fd', (req, res) => {
  const payload = req.body;
  console.log(req.body);
  res.status(201);
  res.json(req.body);
});

app.post('/api/card', (req, res) => {
  const payload = req.body;
  console.log(req.body);
  res.status(201);
  res.json(req.body);
});

app.post('/api/emi', (req, res) => {
  const payload = req.body;
  res.status(201);
  res.json(req.body);
});