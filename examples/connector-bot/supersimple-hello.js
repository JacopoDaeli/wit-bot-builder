'use strict'

const restify = require('restify')
const builder = require('../../')

// Create bot and add dialogs
const bot = new builder.ConnectorBot({
  appId: 'YourAppId',
  appSecret: 'YourAppSecret'
})

bot.add('/', function (session) {
  session.send('Hello World')
})

// Setup Restify Bot Server
var botServer = restify.createServer()
botServer.post('/api/v1/messages', bot.verify(), bot.listen())

botServer.listen(process.env.BOT_PORT || 3978, function () {
  console.log('SimpleHello ConnectorBot listening to %s', botServer.url)
})
