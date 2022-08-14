const { SlashCommandBuilder } = require('discord.js')

const nominees = []

module.exports = {
  data: new SlashCommandBuilder()
    .setName('vote')
    .addStringOption((option) =>
      option.setName('nominee').setDescription('Enter a nominee')
    )
    .setDescription('Start the voting process'),
  async execute(interaction, client) {
    const nominee = interaction.options.getString('nominee')

    nominees.push({ nominee, user: interaction.user.tag })

    await interaction.reply({
      ephemeral: true,
      content: JSON.stringify(nominees),
    })
  },
}
