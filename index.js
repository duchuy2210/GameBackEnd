const express = require('express')
const app = express()
const port = 3000

app.get('/duc-huy', (req, res) => {
  res.send('Hello World!Ok ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})