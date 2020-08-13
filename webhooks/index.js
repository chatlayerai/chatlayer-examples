const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.post('/messages', (req, res) => {
  console.log(JSON.stringify(req.body, null, 4));
  res.sendStatus(200);
});

app.listen(9003, () => console.log('RUNNING'))
