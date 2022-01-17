const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const messaging = require('./messaging');

const app = express();

//TODO you can make the security stronger by checking if the verify token matches the one you put in the platform.

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.status(200).json({"status": "ok"});
});

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().replace('.*T', '');
}
app.post('/', (req, res) => {
    if (req.body.event === 'messages') {
        console.log('MESSAGE DETECTED');
        // console.log(JSON.stringify(req.body, null, 4));
        const {messages, ...rest} = req.body;
        console.log('Incoming %s event -> %j', rest.event, rest);
        for (const {actor, message, timestamp} of messages) {
            const time = formatDate(timestamp);
            console.log('%s | %s said: %j', `${time}`, actor, message);
        }
    }

    if (req.body.event === 'offload') {
        console.log('OFFLOAD DETECTED.')
        // console.log(JSON.stringify(req.body, null, 4));
        const {transcript, ...rest} = req.body;
        console.log('Incoming %s event -> %j', rest.event, rest);
        for (const {actor, message, timestamp} of transcript) {
            const time = formatDate(timestamp);
            console.log('%s | %s said: %j', `${time}`, actor, message);
        }
        res.send({
            "offloadSuccess": true,
            "pauseBot": true
        });
        return;
    }
    res.sendStatus(200);
});


app.post('/messages', async (req, res) => {
    const {messageType} = req.query;
    const {botId, userId, version} = req.body;
    let message = {};
    switch (messageType) {
        case 'buttons':

            message = messaging.createButtonMenuMessage();
            break;
        case 'quick-replies':
            message = messaging.createQuickReplyMessage();
            break;
        case 'attachment':
            message = messaging.createAttachmentMessage();
            break;
        case 'carousel':
            message = messaging.createCarouselTemplateMessage();
            break;
        case 'list':
            message = messaging.createListTemplateMessage();
            break;
        default:
            message = messaging.createTextMessage();
            break;
    }
    await sendMessageToChatalayer(botId, version, userId, message)
    res.send('Message Sent');

});

const sendMessageToChatalayer = async (botId, version, userId, message) => {
    const chatlayerURL = `${process.env.CHATLAYER_SERVER_URL}/v1/bots/${botId}/conversations/${userId}/actions?version=${version}`;
    // The structure of the API can be found in https://api.chatlayer.ai/v1/docs/#operation/executeConversationAction
    const chatlayerRequest = {
        sendMessages: [
            message
        ]
    };
    console.log('Chatlayer URL', chatlayerURL, chatlayerRequest);
    console.log('Token is ', `Bearer ${process.env.CHATLAYER_TOKEN}`);
    return axios.post(chatlayerURL, chatlayerRequest, {
        headers: {
            "Authorization": `Bearer ${process.env.CHATLAYER_TOKEN}`
        }
    })
}


const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Running on ${port}`));


