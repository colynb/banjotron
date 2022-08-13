require('dotenv').config()
const { BOT_TOKEN } = process.env

// imports
const { Client, Collection, GatewayIntentBits } = require('discord.js')
const fs = require('fs')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()
client.commandArray = []
//
//./src/functions/handlers/handleCommands.js
//./src/functions/handlers/handleCommands.js
const functionFolders = fs.readdirSync('./src/functions')
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'))

  for (const file of functionFiles) {
    console.log(`./src/functions/${folder}/${file}`)
    require(`./functions/${folder}/${file}`)(client)
  }
}

client.handleEvents()
client.handleCommands()

client.login(BOT_TOKEN)
