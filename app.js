const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World, Karl!'))

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))
