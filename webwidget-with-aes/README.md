## Chatlayer-examples: webwidget-with-aes
Examples for developers


### Running the server:
- firstly copy the .env.example file into .env file
  run `cp .env.example .env` from the root of this directory
- fill in the values for `PORT`, `CHATLAYER_CHATBOX_TOKEN`, `AES_SECRET` in `.env` file
    - CHATLAYER_CHATBOX_TOKEN: The token can be found in the Chat Widget configuration window as
    `<script src="https://chatbox.staging.chatlayer.ai/sdk/CHATLAYER_CHATBOX_TOKEN" onload='chatlayer()' async>
    </script>`
    - AES_SECRET: The secret that needs to be passed in order to get the chatlayer chatbox. can be found in the Chat Widget configuration window.
    - PORT: The port where you want to serve the server. This is optional.

- After all the above is done, run `npm start` on the root of this directory to start the server. By default, the server will be served on port 4045 if you haven't set the PORT variable in the .env
