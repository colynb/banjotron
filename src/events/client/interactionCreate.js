const { InteractionType } = require('discord.js')

module.exports = {
  name: 'interactionCreate',
  once: false,
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName)
      if (!command) return

      try {
        await command.execute(interaction, client)
      } catch (e) {
        console.error(e)
        await interaction.reply({
          content: `Something when wrong while executing this command`,
          ephemeral: true,
        })
      }
    } else if (interaction.isButton()) {
      //
      const button = client.buttons.get(interaction.customId)
      if (!button) return new Error('There was a problem')

      try {
        await button.execute(interaction, client)
      } catch (e) {
        console.error(e)
      }
    } else if (interaction.type === InteractionType.ModalSubmit) {
      //
      const modal = client.modals.get(client.customId)
      if (!modal) return new Error('There was a problem')

      try {
        await modal.execute(interaction, client)
      } catch (e) {
        console.error(e)
      }
    } else if (
      interaction.type === InteractionType.ApplicationCommandAutocomplete
    ) {
      const command = client.commands.get(interaction.commandName)
      if (!command) return

      try {
        await command.execute(interaction, client)
      } catch (e) {
        console.error(e)
        await interaction.reply({
          content: `Something when wrong while executing this command`,
          ephemeral: true,
        })
      }
      //
    }
  },
}
