const { Player, User } = require('../../database')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    Player.sync()
    User.sync()
    console.log(`${client.user.tag} is online!`)
  },
}
