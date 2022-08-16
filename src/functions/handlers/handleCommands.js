const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const fs = require('fs')
const env = require('../../utils/env')

const commands = []

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands')
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => {
          return file.endsWith('.js') || file.endsWith('.ts')
        })

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`)
        client.commands.set(command.data.name, command)
        commands.push(command.data.toJSON())

        console.log(`Command ${command.data.name} has been registered`)
      }
    }
    //
    const clientId = env('BOT_ID')
    const guildId = env('GUILD_ID')
    const rest = new REST({ version: '9' }).setToken(env('BOT_TOKEN'))
    try {
      console.log(`Started refreshing application (/) commands.`)
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      })

      console.log(`Successfully refreshed application (/) commands.`)
    } catch (e) {
      //
      console.error(e)
    }
  }
}
