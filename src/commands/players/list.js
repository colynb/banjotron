const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require('discord.js')

const { prisma } = require('../../utils/database')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('list')
    .setDescription('List all players'),
  async execute(interaction, client) {
    const players = await prisma.player.findMany({
      where: { series: 2, active: true },
      orderBy: [
        {
          slug: 'asc',
        },
      ],
    })

    // const list = players.map((p, i) => `${p.code}\t${p.name}`).join(`\n`)
    const content = `
Here are all the current qualified nominees for Series 2:
To rate a player, type \`/rate [CODE]\`

Example:

To rate Don Stover, simply type "/rate 1185c5"
You with then be prompted to rate Don on a number of attributes like Style, Originality, Influence, etc

You can only rate on these attributes once which means you can keep rating the same player but your last rating is what get applied.

    `.trim()

    await interaction.reply({
      ephemeral: true,
      content,
    })
  },
}
