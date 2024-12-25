const express = require('express')

const app = express()
require('dotenv').config();

const PORT = 3000

const path = require('path')

require("./src/configs/dbConfig")
app.use("/", require("./src/routes/user.route"))



app.listen(PORT, () => {
    console.log("Server is running on : " + PORT)
})