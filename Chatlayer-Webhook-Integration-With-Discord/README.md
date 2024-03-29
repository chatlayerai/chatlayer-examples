# DISCORD-CHATLAYER-PIZZABOT
A simple webhook integration of Chatlayer webhook with a Discord bot to order pizza

In order to run this project do the following

- Log in into [Discord](https://discord.com/developers)
- Select NEW APPLICATION in the top right corner
- Give your application a name
- Select "bot" in the lefthand menu 
- Click ADD bot, confirm
- Copy the .env.example file into .env file. To do so run `cp .env.example .env` from the root of this directory
- Copy your token value and assign it to .env variable `DISCORD_TOKEN`
- Copy your application ID, you can find this value under the GENERAL INFORMATION tab on the left
- Surf to [discord permissions](https://discordapi.com/permissions.html)
- Select everything
- Copy paste your application ID and invite your bot to your channel with the link at the bottom of the page.
- Set the prefix for your bot in the .env (Prefix is the command that you want the bot to respond to for example if you set it to  `-` the bot will only look into the messages starting with that prefix)
- run `npm start` on the root of this directory to start the server. If you haven't set the environment variable `PORT` the default port is `3000`
- Expose your localhost with ngrok
- Copy paste your ngrok url in cms.chatlayer.ai in the webhook config promt
- Copy paste the webhook url provided by Chatlayer in your .env variable `CHATLAYER_WEBHOOK_URL`
- If you set your webhook url to only accept with a token then make sure to add the token into environment variable `WEBHOOK_TOKEN`
- Don't forget to create a token on Chatlayer at  https://app.chatlayer.ai/tokens. paste this value in your environment variable `CHATLAYER_TOKEN`
- Restart your local server. To restart, just stop your service by pressing `ctrl + c` on the terminal where its running and the run `npm start` again.

### Have fun !!!
