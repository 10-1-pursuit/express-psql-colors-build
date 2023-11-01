const express = require('express')
const colors = express.Router()


// GET all colors
colors.get("/", async (req, res) => {
    const allColors = await getAllColors()
    if(allColors[0]){
        res.status(200).json(allColors)
    } else {
        res.status(500).json({ error: "server error" })
    }
})




module.exports = colors