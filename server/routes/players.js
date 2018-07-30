const express = require ('express')
const router = express.Router()

const db = require ('../db/players')

router.get('/', (req, res) => {
  db.getPlayers()
  .then(players => {
    res.json({players})
  })
})

module.exports = router
