const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns my ping!'),
  async execute(interaction, client) {
    //
    const message = await interaction.deferReply({
      ephemeral: true,
      fetchReply: true,
    })

    const content = `API Latency: ${client.ws.ping}ms\nClient ping: ${
      message.createdTimestamp - interaction.createdTimestamp
    }ms`
    await interaction.editReply({
      ephemeral: true,
      content,
    })
  },
}
