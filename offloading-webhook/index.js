require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json({ "status": "ok" });
});

app.post('/', (req, res) => {
  if (req.body.event === 'messages') {
    console.log('MESSAGE DETECTED');
    console.log(JSON.stringify(req.body, null, 4));
  }

  if (req.body.event === 'offload') {
    console.log('OFFLOAD DETECTED.')
    console.log(JSON.stringify(req.body, null, 4));
  }
  res.sendStatus(200);
});

const port = process.env.PORT || 9003
app.listen(port, () => console.log(`Running on ${port}`));
