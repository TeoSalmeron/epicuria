const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

// JSON

app.use(express.json())
app.use(cors())

// ROUTES

const administratorRouter = require('./routes/Administrator')
app.use('/administrator', administratorRouter)

// END ROUTES

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001")
    })
})