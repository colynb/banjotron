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

    const user = interaction.options.getUser('user') ?? interaction.user

    console.log(user)

    const content = `API Latency: ${client.ws.ping}ms\nClient ping: ${
      message.createdTimestamp - interaction.createdTimestamp
    }ms\nexecuted by ${user.tag}`
    await interaction.editReply({
      ephemeral: true,
      content,
    })
  },
}
