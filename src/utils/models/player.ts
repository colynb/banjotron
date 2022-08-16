const { prisma } = require('../database')

const createPlayer = async (player) => {
  const found = await prisma.player.findUnique({ where: { slug: player.slug } })

  if (found && found.series === 1)
    throw new Error(`Player ${found.name} was already included in Series 1. 😁`)

  if (found && found.series === 2)
    throw new Error(
      `Player ${found.name} ${
        found.active
          ? ' has already been nominated for Series 2. 😁'
          : ' is currently being reviewed for Series 2. 😁'
      }`
    )

  const newPlayer = await prisma.player.create({
    data: player,
  })

  return newPlayer
}

module.exports = { createPlayer }
