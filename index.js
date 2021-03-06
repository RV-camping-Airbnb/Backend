require('dotenv').config()

const server = require('./server/server.js')

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`\n API running on port ${port}\n`)
})