const dotenv = require('dotenv');
dotenv.config()

const serverPort = process.env.PORT || 4044;
const CHATLAYER_CHATBOX_URL = process.env.CHATLAYER_CHATBOX_URL;
const CHATLAYER_CHATBOX_TOKEN = process.env.CHATLAYER_CHATBOX_TOKEN;
const AES_SECRET = process.env.AES_SECRET;

const express = require('express');
const crypto = require('crypto');

const app = express();
app.set('view engine', 'pug');

const createAESToken = (payload, secret) => {
  const iv = Buffer.from(crypto.randomBytes(8)).toString('hex');
  const secretBuffer = Buffer.from(secret, 'hex');
  const cipher = crypto.createCipheriv('aes-256-cbc', secretBuffer, iv);
  const update = cipher.update(typeof payload === 'object' ? JSON.stringify(payload) : String(payload));
  const encrypted = Buffer.concat([update, cipher.final()]);
  return iv + encrypted.toString('hex');
}

app.get('/', (req, res) => {
  // This token should always be generated server-side to prevent the secret from leaking.
  const token = createAESToken({
    exp: Math.floor(Date.now()/1000)+36000,
    session: {
      isAuthorized: true,
      foreignUserId: 'UserXYZ',
    },
    sessionId: 'UNIQUE_ID_FOR_THIS_USER',
  }, AES_SECRET);

  res.render('index', { scriptSrc: `${CHATLAYER_CHATBOX_URL}/sdk/${CHATLAYER_CHATBOX_TOKEN}`, token });
});

app.listen(serverPort, () => {
  console.log(`🚀 - Running on port ${serverPort}`);
  console.log(`http://localhost:${serverPort}`)
});
