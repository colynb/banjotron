const { SlashCommandBuilder } = require('discord.js')
const { Tags } = require('../../database')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('showtags')
    .setDescription('Show list of all tags'),
  async execute(interaction, client) {
    const tagList = await Tags.findAll({ attributes: ['name'] })
    const tagString = tagList.map((t) => t.name).join(`\n`) || 'No tags set.'

    return interaction.reply(`List of tags:\n${tagString}`)
  },
}
