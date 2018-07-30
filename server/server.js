const express = require('express')
const server = express()
const playerRoutes = require('./routes/players')
const path = require('path')

server.use(express.static(path.join(__dirname, '../public')))
server.use('/players', playerRoutes)

module.exports =  server
