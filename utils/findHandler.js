'use strict'
const model = require('../models/index.js')

module.exports = async (
  type = 'UserGame',
  [...includeCol],
  findMethod = 'all',
  uuid = ''
) => {
  try {
    const data =
      findMethod === 'all'
        ? await model[type].findAll({
            include: [...includeCol],
          })
        : findMethod === 'one'
        ? await model[type].findOne({
            where: {
              uuid,
            },
            include: [...includeCol],
          })
        : null
    return data
  } catch (error) {
    return new Error(error)
  }
}
