const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nominate')
    .setDescription(
      'Nominate your favorite banjo player for the upcoming series.'
    ),
  async execute(interaction, client) {
    //
    const modal = new ModalBuilder()
      .setCustomId('modal-nominate')
      .setTitle('Nominate your favorite player')
    const playerNameInput = new TextInputBuilder()
      .setCustomId('playerNameInput')
      // The label is the prompt the user sees for this input
      .setLabel('Player Full Name')
      // Short means only a single line of text
      .setStyle(TextInputStyle.Short)

    const playerDescriptionInput = new TextInputBuilder()
      .setCustomId('playerDescriptionInput')
      // The label is the prompt the user sees for this input
      .setLabel('Player Description')
      .setPlaceholder(
        'Please include as much detail as possible to validate qualifications.'
      )
      // Short means only a single line of text
      .setStyle(TextInputStyle.Paragraph)

    // An action row only holds one text input,
    // so you need one action row per text input.
    const firstActionRow = new ActionRowBuilder().addComponents(playerNameInput)
    const secondActionRow = new ActionRowBuilder().addComponents(
      playerDescriptionInput
    )

    // Add inputs to the modal
    modal.addComponents(firstActionRow, secondActionRow)

    // Show the modal to the user
    await interaction.showModal(modal)
  },
}
