const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  ActionRowBuilder,
  TextInputStyle,
} = require('discord.js')
const { Tags } = require('../../database')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addtag')
    .setDescription('Create a new tag'),
  async execute(interaction, client) {
    const modal = new ModalBuilder().setCustomId('myModal').setTitle('My Modal')

    // TODO: Add components to modal...

    // Create the text input components
    const favoriteColorInput = new TextInputBuilder()
      .setCustomId('favoriteColorInput')
      // The label is the prompt the user sees for this input
      .setLabel("What's your favorite color?")
      // Short means only a single line of text
      .setStyle(TextInputStyle.Short)

    const hobbiesInput = new TextInputBuilder()
      .setCustomId('hobbiesInput')
      .setLabel("What's some of your favorite hobbies?")
      // Paragraph means multiple lines of text.
      .setStyle(TextInputStyle.Paragraph)

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(
      favoriteColorInput
    )
    const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput)

    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow)

    await interaction.showModal(modal)

    // try {
    //   // equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
    //   const tag = await Tags.create({
    //     name: tagName,
    //     description: tagDescription,
    //     username: interaction.user.tag,
    //   })

    //   return interaction.reply(`Tag ${tag.name} added.`)
    // } catch (error) {
    //   if (error.name === 'SequelizeUniqueConstraintError') {
    //     return interaction.reply('That tag already exists.')
    //   }

    //   console.error(error)
    //   return interaction.reply('Something went wrong with adding a tag.')
    // }
  },
}
