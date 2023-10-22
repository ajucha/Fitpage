const express = require("express");
require('dotenv').config()
const fitpageRoute = require('./routes/fitpage_route')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 8000
app.use(cors({ origin: true }))
app.use('/', fitpageRoute)


const start = async () => {
    try {
        // DB connection goes here
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (error) {
        console.log(error, "ERROR")
    }
}



// TO start server use npm start command


start()


