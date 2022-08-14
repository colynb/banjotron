const { Player } = require('../../database')

module.exports = {
  data: 'modal-nominate',
  async execute(interaction, client) {
    const name = interaction.fields.getTextInputValue('playerNameInput')
    const bio = interaction.fields.getTextInputValue('playerDescriptionInput')
    console.log(interaction.user)
    try {
      // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
      const player = await Player.create(
        {
          name,
          bio,
          user: { username: interaction.user.tag },
        },
        {
          include: [
            {
              association: Player.User,
            },
          ],
        }
      )

      return interaction.reply(`Player ${player.name} added.`)
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return interaction.reply('Nice! That player already exists.')
      }

      console.error(error)
      return interaction.reply('Something went wrong with adding a player.')
    }
  },
}
