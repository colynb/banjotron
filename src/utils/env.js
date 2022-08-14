require('dotenv').config()

module.exports = function env(key, defaultValue) {
  return process.env[key] ?? defaultValue
}
