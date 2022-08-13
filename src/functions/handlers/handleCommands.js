const fs = require('fs')

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync('./src/commands')
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith('.js'))
      for (const files of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`)
        client.commands.set(command.data.name, command)
        client.commandArray.push(command, command.data.toJSON())

        console.log(`Command ${command.data.name} has been registered`)
      }
    }
  }
}
