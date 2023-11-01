const express = require('express')
const colors = express.Router()


// GET all colors
colors.get("/", (req, res) => {
    res.json( { status: "ok" } )
})




module.exports = colors