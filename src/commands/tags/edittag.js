const { SlashCommandBuilder } = require('discord.js')
const { Tags } = require('../../database')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('edittag')
    .addStringOption((option) =>
      option.setName('name').setDescription('Enter tag name')
    )
    .addStringOption((option) =>
      option.setName('description').setDescription('Enter tag description')
    )
    .setDescription('Retreive a tag'),
  async execute(interaction, client) {
    const tagName = interaction.options.getString('name')
    const tagDescription = interaction.options.getString('description')

    // equivalent to: UPDATE tags (description) values (?) WHERE name = ?;
    const affectedRows = await Tags.update(
      { description: tagDescription },
      { where: { name: tagName } }
    )

    if (affectedRows > 0) {
      return interaction.reply(`Tag ${tagName} was edited.`)
    }

    return interaction.reply(`Could not find a tag with name ${tagName}.`)
  },
}
