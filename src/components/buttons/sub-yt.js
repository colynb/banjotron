module.exports = {
  data: {
    name: 'sub-yt',
  },
  async execute(interaction, client) {
    try {
      await interaction.reply({
        content: `https://www.youtube.com/channel/UCP27kfiil-T3EaIQccqo2sg`,
      })
    } catch (e) {
      console.error(e)
    }
  },
}
