const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  // SQLite only
  storage: 'database.sqlite',
})

const Player = sequelize.define('players', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  bio: Sequelize.TEXT,
})

const User = sequelize.define('users', {
  username: Sequelize.STRING,
})
Player.User = Player.belongsTo(User)
User.Players = User.hasMany(Player)

module.exports = {
  Player,
  User,
}
