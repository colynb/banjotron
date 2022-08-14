const { SlashCommandBuilder } = require('discord.js')
const { Tags } = require('../../database')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('taginfo')
    .addStringOption((option) =>
      option.setName('name').setDescription('Enter tag name')
    )
    .setDescription('Retreive a tag'),
  async execute(interaction, client) {
    const tagName = interaction.options.getString('name')

    // equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
    const tag = await Tags.findOne({ where: { name: tagName } })

    if (tag) {
      return interaction.reply(
        `${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`
      )
    }

    return interaction.reply(`Could not find tag: ${tagName}`)
  },
}
