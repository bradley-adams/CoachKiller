const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getPlayers(){
  return db('players').select()
}

module.exports = {
  getPlayers
}
