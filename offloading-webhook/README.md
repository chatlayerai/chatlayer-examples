## Chatlayer-examples: Webhook-Offloading

You will receive all messages going through chatlayer along with the offloading request sent to the chatlayer.

### Running the server:
- firstly copy the .env.example file into .env file
  run `cp .env.example .env` from the root of this directory
- fill in the value of `CHATLAYER_TOKEN`. You can create your token [here](https://app.dev.chatlayer.ai/settings/api-access/tokens)
- fill in the values for `PORT`, `WEBHOOK_VERIFY_TOKEN` and `CHATLAYER_SERVER_URL`, in `.env` file (optional)
- If you didn't fill in the default port used will be `9000`
- If you want to switch chatlayer server from EU to US, change rge value of `CHATLAYER_SERVER_URL` to `https://api.prod.us-east4.gcp.chatlayer.ai`. For Asia use `https://api.prod.asia-south1.gcp.chatlayer.ai`
- run `npm start` on the root of this directory to start the server


Once the server is run, You can set up webhook offloading from the `settings -> offloading -> Webhook` in the chatlayer platform.


Once the bot is offloaded, you can send the message to the user as an agent by using the API of this server.
Send the Post request to `http://localhost:9000/messages` with the following body

```
 {
    botId: 'Id of your bot', 
    userId: 'userId/sessionId',
    version: 'Version of the bot LIVE/DRAFT'
 }
```

The type of message you want to send can be selected by messageType property in query string

The full URl would look like this `http://localhost:9000/messages?messageType=buttons`, following values can be passed in messageType:
- buttons
- quick-replies
- attachment
- carousel
- list
- text

By default this API sends a text message.

An example curl
```
curl --location --request POST 'http://localhost:9003/messages?messageType=buttons' \
--header 'Authorization: Bearer YOUR_CHATLAYER_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "botId": "DEV-kl0sasds", 
    "userId": "emulator-b872317c-5085-4fa0-9069-cabasdqwe29",
    "version": "DRAFT"
 }'
 ```
