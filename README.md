<div align="center">
  <picture>
    <img alt="logo" src="https://cdn.discordapp.com/attachments/1109269156337025095/1173170236242001950/Cirno.round.32233248885.png?ex=6562faec&is=655085ec&hm=c56afcedca90e18bd1e28ed9580993307c5f61c29f11d57a8b5c11951bc272b3&">
  </picture>
</div>

# cirno-bot

A light weight Cirno-themed discord bot. For personal usage & fun.

## Getting Started

1. Install [node](https://nodejs.org/en/) if you haven't already.

> [!WARNING]
> Make sure it's ```v16.11.0``` or higher. Check the version by typing ```node -v```.
   
3. Clone the repository into the location of you're choosing.

   ```
   git clone https://github.com/throwawaychris/cirno-bot.git
   ```
3. Install discord.js

   ```
   npm install discord.js
   ```

## Making the config file

Create the appropiate config file for the bot and guild tokens.

### Using config.json (default)

Create ```config.json``` in the project root and insert your own tokens as such:

```json
{
    "token": "your_token_here",
    "clienId": "your_client_id_here",
    "guildId": "your_guild_id_here"
}
```

### Using .env

Install .env.

```
npm install dotenv
```

Create ```.env``` in the project root and insert:

```dotenv
token=your_token_here
clientId=your_client_id_here
guildId=your_guild_id_here
```

Adjust ```index.js``` and ```deploy-commands.js``` to use .env.

1. From ```index.js```, remove:
   ```Javascript
   const { token } = require('./config.json');
   ```

2. From ```deploy-commands.js```, remove:
   ```Javascript
   const { clientId, guildId, token } = require('./config.json');
   ```

3. And add (These should already be there as comments, just uncomment them):
   ```Javascript
   const dotenv = require('dotenv');
   dotenv.config();
   ```
   
4. You can access these tokens by calling
   ```Javascript
   process.env.token
   process.env.clientId
   process.env.guildId
   ```

   Make sure to replace the appropiate token calls to the .env calls

> [!NOTE]
> You can find more information about this [here](https://discordjs.guide/creating-your-bot/#using-config-json).

## Setting up minecraft server config
There's a built in minecraft server status command incase you have a minecraft server running.

To set-up the command to work properly, you must setup the necessary variables in ```config.json``` like so.
```json
{
    "token": "YOUR_BOT_TOKEN",
    "clientId": "YOUR_CLIENT_ID",
    "guildId": "YOUR_GUILD_ID",
    "mcserver": {
        "ipaddr" : "YOUR_MINECRAFT_SERVER_IP",
        "title" : "YOUR_SERVER_TITLE_TO_DISPLAY",
        "icon" : "THE_SERVER_ICON_URL_OF_YOUR_SERVER"
    }
}
```
> [!WARNING]
> Delete the mcserver.js if you aren't going to use it, and just re-deploy the commands.

> [!NOTE]
> Automatic icon fetching has not been added yet. (Get on it, me)

## Usage

Once the config file is set with your tokens, deploy the commands to your discord server by:
```
node deploy-commands.js
```

Start Cirno by:
```
npm run start
```

## Changing the initial activity status

You can change the activity status message on start up by modifying ```ready.js``` in the events directory
```Javascript
// Change this value!
const activity = "God!";
```

## Adding more commands

You can add more commands by creating ```.js``` files in the commands directory or any of its sub-directories.

A basic template for a command might look like this:
```Javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        // Write your code here
        await interaction.reply('Pong!');
    }
}
```

Just change the name and description to what you want and insert your code into the execute function.

> [!NOTE]
> You can find more on this on [discord.js](https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files).

## Adding cirno-bot as a linux service

Since ```index.js``` already comes with ```#!/usr/bin/env node```, you can ```chmod +x index.js``` and add it as a daemon service.

1. Create the service file:
   ```
   sudo nano /etc/systemd/system/cirno-bot.service
   ```
   
   ```.service
   [Unit]
   Description=Cirno discord bot
   After=network.target

   [Service]
   ExecStart= # Whereever you put Cirno in (ie. /home/user/cirno-bot/index.js)
   Restart=always
   # Use your username if you have sole permissions to the directory
   User=nobody
   # Use 'nogroup' group for Ubuntu/Debian
   # use 'nobody' group for Fedora
   Group=nogroup
   Environment=PATH=/usr/bin:/usr/local/bin
   Environment=NODE_ENV=production
   WorkingDirectory= # Whereever you put Cirno in (ie. /home/user/cirno-bot)

   [Install]
   WantedBy=multi-user.target
   ```

2. Reload daemon
   ```
   sudo systemctl daemon-reload
   ```

3. Start Cirno service
   ```
   sudo systemctl start cirno-bot.service
   ```

4. Start Cirno on boot
   ```
   sudo systemctl enable cirno-bot.service
   ```
