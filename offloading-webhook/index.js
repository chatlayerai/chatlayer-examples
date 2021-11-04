const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//TODO you can make the security stronger by checking if the verify token matches the one you put in the platform.

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.status(200).json({ "status": "ok" });
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().replace('.*T', '');
}
app.post('/', (req, res) => {
  if (req.body.event === 'messages') {
    console.log('MESSAGE DETECTED');
    // console.log(JSON.stringify(req.body, null, 4));
    const { messages, ...rest } = req.body;
    console.log('Incoming %s event -> %j', rest.event, rest);
    for (const { actor, message, timestamp } of messages) {
      const time = formatDate(timestamp);
      console.log('%s | %s said: %j', `${time}`, actor, message);
    }
  }

  if (req.body.event === 'offload') {
    console.log('OFFLOAD DETECTED.')
    // console.log(JSON.stringify(req.body, null, 4));
    const { transcript, ...rest } = req.body;
    console.log('Incoming %s event -> %j', rest.event, rest);
    for (const { actor, message, timestamp } of transcript) {
      const time = formatDate(timestamp);
      console.log('%s | %s said: %j', `${time}`, actor, message);
    }
  }
  res.sendStatus(200);
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Running on ${port}`));
