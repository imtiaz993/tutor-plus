var http = require('http')
var twilio = require('./twilio-whatsapp')

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('Hello World!')
  })
  .listen(8080)
