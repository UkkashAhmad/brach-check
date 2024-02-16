import express from 'express'

const app = express()

const PORT = 2211;


app.listen(PORT, () => {
    console.log(`app is up with ${PORT}`)
})

app.get((req ,res) => {
    res.json('Demage has been done')
})