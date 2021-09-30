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
    console.log('discord pizzabot is live');
});

const CHATLAYER_WEBHOOK_URL = process.env.CHATLAYER_WEBHOOK_URL;

// listen to PIZZA keyword in sentence but exclude the private channel
client.on('message', message =>{
    if (message.channel.type === 'dm') {
        // if it's not a bot message send it to chatlayer with webhook
        if (message.author.bot) {
        }else {
            const privatemessage = message.content;
            const privateauthor = message.author;

            axios.post(CHATLAYER_WEBHOOK_URL, {
                "message": {
                  "textMessage": {
                    "text": `${privatemessage}`
                  },
                },
                "user": {
                  "id": `${privateauthor}`,
                  "firstName": "John",
                  "lastName": "Doe",
                  "preferredLanguage": "en"
                },
                "sessionData": {
                  "email": "support@chatlayer.ai",
                  "address.zipCode": "2000"
                }
            },{
                headers: {
                    'Authorization': `Bearer ${process.env.CHATLAYER_TOKEN}`
                }
            });
            app.post('/', (req,res) => {
                //check if verification code is correct
                if(req.body.verifyToken !== process.env.WEBHOOK_TOKEN){
                    console.log('token rejected');
                    return res.sendStatus(401);
                }
                res.sendStatus(200);
                //throw the event type message and only work with real responses
                if(req.body.message.type !== 'event'){
                    console.log({text: req.body.message.text, senderId: req.body.senderId, authorId: message.author.id});
                    const sender = '<@' + message.author.id + '>';
                    console.log(`${sender}`);
                    
                    if(sender == req.body.senderId){
                        message.author.send(`${req.body.message.text}`);
                    }
                }
            })
        }
    } else {
        const words = message.content.split(/ +/);
        console.log(`${words}`);
        // cycle through the array looking for PIZZA
        for(const i of words){
            if(i.toLowerCase() == 'pizza'){
                // open a DM
                message.author.send('Did you say Pizza?\n I can order you a Pizza!\n what type of pizza do you like?');
            }
        }
    }
    
});

client.login(process.env.DISCORD_TOKEN);

