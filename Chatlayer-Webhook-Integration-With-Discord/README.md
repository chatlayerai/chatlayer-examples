# DISCORD-CHATLAYER-PIZZABOT
A simple webhook integration of chatlayer webhook with a discord bot to order pizza

In order to run this project do the following

- Log in into discord.com/developers
- Select NEW APPLICATION in the top right corner
- Give your application a name
- Select "bot" in the lefthand menu 
- Click ADD bot, comfirm
- Copy the .env.example file into .env file. To do so run `cp .env.example .env` from the root of this directory
- Copy your token value and assign it to .env varibale `DISCORD_TOKEN`
- Copy your application ID, you can find this value under the GENERAL INFORMATION tab on the left
- Surf to [discord permissions](https://www.discordapi.com/permissions.html)
- Select everything
- Copy paste your application ID and invite your bot to your channel
- run `npm start` on the root of this directory to start the server. If you haven't set the .env variable `PORT` the default port is `3000`
- Expose your localhost with ngrok
- Copy paste your ngrok url in cms.chatlayer.ai in the webhook config promt
- Copy paste the webhook url provided by chatlayer in your .env variable `CHATLAYER_WEBHOOK_URL`
- If you set your webhook url to only accept with a token then make sure to copy paste the token into .env variable `WEBHOOK_TOKEN`
- Don't forget to create a token on cms.chatlayer.ai paste this value in your .env variable `CHATLAYER_TOKEN`
- Restart your local server

### Have fun !!!