// express is used to access the server
const express = require('express')
const app = express()
// bodyParser is used to access user Input
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
// go to "localhost:3000"
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// When a user connects to the address that ends in "/" or "" after the port number
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/input.html')
})
// Input from "/"
app.post('/', (req, res) => {
  let userInput = req.body.userInput
  switch (userInput) {
    case 'h':
    case 'help':
      res.send('wfanctl version X<br>' +
               'quit&emsp;Terminate command line mode.')
    case 'v':
    case 'd':
    case 'I':
    case 'i':
    case 'f':
      break
    default:
      res.send('Unrecognized command, \"' + userInput +'".')
  }
})
