const { prisma } = require('../../utils/database')
const { createPlayer } = require('../../utils/models/player')
const slugify = require('slugify')
const crypto = require('crypto')

module.exports = {
  data: 'modal-nominate',
  async execute(interaction, client) {
    const name = interaction.fields.getTextInputValue('playerNameInput')
    const description = interaction.fields.getTextInputValue(
      'playerDescriptionInput'
    )
    try {
      const discordtag = interaction.user.tag
      const submittedBy = await prisma.user.upsert({
        where: { discordtag },
        update: { discordtag },
        create: { discordtag },
      })

      const slug = slugify(name, {
        replacement: '-', // replace spaces with replacement character, defaults to `-`
        lower: true, // convert to lower case, defaults to `false`
        strict: true, // strip special characters except replacement, defaults to `false`
        trim: true, // trim leading and trailing replacement chars, defaults to `true`
      })
      const code = crypto.randomBytes(3).toString('hex')

      const player = await createPlayer({
        name,
        slug,
        code,
        description,
        series: 2,
        active: false,
        userId: submittedBy.id,
      })

      const content = `🪕🪕 Player ${player.name} has been submitted to be reviewed! 🪕🪕`
      client.channels.cache.get('1008895353879265330').send(content)

      return interaction.reply({
        content,
        ephemeral: true,
      })
    } catch (error) {
      console.error(error)
      return interaction.reply({
        content: error.message,
        ephemeral: true,
      })
    }
  },
}
