const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('Rate a player'),
  async execute(interaction, client) {
    interaction
      .reply({ content: 'Enter your rating: (1-5)', ephemeral: true })
      .then(() => {
        const filter = (m) => interaction.user.id === m.author.id
        interaction.channel
          .awaitMessages({ filter, time: 60000, max: 1, errors: ['time'] })
          .then((messages) => {
            interaction.followUp(`You've entered: ${messages.first().content}`)
          })
          .catch(() => {
            interaction.followUp('You did not enter any input!')
          })
      })
  },
}
