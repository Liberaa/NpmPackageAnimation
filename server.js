import express from 'express'
const app = express()
const port = 3000

app.get('./app.js', (req, res) => {
    
})

app.listen(port, () => {
    console.log(port)
})