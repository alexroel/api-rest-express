const express = require('express')
const mongoose = require('mongoose')

const user = require('./user.handler')

const app = express()

const port = 3000

app.use(express.json())


mongoose.connect('mongodb+srv://alexroel:alexroel@myapp.ewt1m.mongodb.net/api-db?retryWrites=true&w=majority')


app.get('/api/', user.list)
app.post('/api/', user.create)
app.get('/api/:id', user.get)
app.put('/api/:id', user.update)
app.delete('/api/:id', user.delete)



app.listen(port, ()=>{
    console.log(`El ejemplo se esta ejecutando en el puerto ${port}`)
    console.log('Run in: http://localhost:3000/api')
})