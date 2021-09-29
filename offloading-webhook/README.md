## Chatlayer-examples: Webhook-Offloading

You will receive all messages going through chatlayer along with the offloading request sent to the chatlayer.

### Running the server:
- firstly copy the .env.example file into .env file
  run `cp .env.example .env` from the root of this directory (optional)
- fill in the values for `PORT` and `WEBHOOK_VERIFY_TOKEN`, in `.env` file (optional)
- If you didn't fill in the default port used will be `9000`
- run `npm start` on the root of this directory to start the server


Once the server is run, You can set up webhook offloading from the `settings -> offloading -> Webhook` in the chatlayer platform.
