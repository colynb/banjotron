const fs = require('fs')
module.exports = (client) => {
  client.handleComponents = async () => {
    const componentsFolder = fs.readdirSync(`./src/components`)

    for (const folder of componentsFolder) {
      const files = fs
        .readdirSync(`./src/components/${folder}`)
        .filter((file) => file.endsWith('.js'))

      switch (folder) {
        case 'buttons':
          for (const file of files) {
            const button = require(`../../components/${folder}/${file}`)
            client.buttons.set(button.data.name, button)
          }
          break

        case 'modals':
          for (const file of files) {
            const modal = require(`../../components/${folder}/${file}`)
            client.modals.set(modal.data.name, modal)
          }
          break
      }
    }
  }
}
