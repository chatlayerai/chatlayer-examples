const Discord = require('discord.js');
const axios = require('axios');
const express = require('express');
require('dotenv').config();

const client = new Discord.Client();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0');

client.once('ready', () => {
    console.log('discord bot is live');
});

const CHATLAYER_WEBHOOK_URL = process.env.CHATLAYER_WEBHOOK_URL;

const createIncomingMessageForChatlayer = ({userMessage, author, originalMessage}) => {
    console.log(originalMessage)
    return {
        message: {
            textMessage: {
                text: userMessage
            },
        },
        user: {
            id: originalMessage.channel.id,
            firstName: author.username,
            preferredLanguage: author.locale ?? 'en'
        },
        sessionData: {
            channelId: originalMessage.channel.id
        }
    }
}

const sendIncomingMessageToChatlayer = async (message) => {
    return axios.post(CHATLAYER_WEBHOOK_URL, message, {
        headers: {
            'Authorization': `Bearer ${process.env.CHATLAYER_TOKEN}`
        }
    });
}

const onMessage = async (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content.startsWith(process.env.PREFIX)) {
        const userMessage = message.content.substring(process.env.PREFIX.length);
        const chatlayerIncomingMessage = createIncomingMessageForChatlayer({
            userMessage: userMessage,
            author: message.author,
            originalMessage: message,
        });
        await sendIncomingMessageToChatlayer(chatlayerIncomingMessage).catch(err => {
            message.channel.send(
                `Error occured ${err.message}`
            );
        })
    }
}

app.post('/', (req, res) => {
    //check if verification code is correct
    if (req.body.verifyToken !== process.env.WEBHOOK_TOKEN) {
        console.log('token rejected');
        return res.sendStatus(401);
    }
    res.sendStatus(200);
    console.log(req.body.message.type);
    //throw the event type message and only work with real responses
    if (req.body.message.type !== 'event') {
        console.log(req.body);
        console.log({
            text: req.body.message.text,
            senderId: req.body.senderId,
            authorId: req.body.senderId
        });
        const channel = client.channels.cache.find(channel => channel.id === req.body.senderId)
        channel.send(req.body.message.text)
    }
})

client.on('message', onMessage)

client.login(process.env.DISCORD_TOKEN);

