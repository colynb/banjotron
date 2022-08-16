const env = require('./utils/env')

// imports
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  ChannelType,
} = require('discord.js')
const fs = require('fs')

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [Partials.Channel],
})

client.commands = new Collection()
client.buttons = new Collection()
client.modals = new Collection()

const functionFolders = fs.readdirSync('./src/functions')
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'))

  for (const file of functionFiles) {
    require(`./functions/${folder}/${file}`)(client)
  }
}

client.handleEvents()
client.handleCommands()
client.handleComponents()

client.login(env('BOT_TOKEN'))
