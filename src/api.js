const express = require('express')

//Importar Mongoose
const mongoose = require('mongoose')

//Importara handler de User 
const user = require('./user.handler')
const app = express() // Importar  Expres 

const port = 3000 

//Formato json lo va transformar a objeto json
app.use(express.json())

//Conexión a base de datos MongoDB
mongoose.connect('mongodb+srv://alexroel:alexroel@app-db.ewt1m.mongodb.net/mydb?retryWrites=true&w=majority')

app.get('/api/', user.list)
app.post('/api/', user.create)
app.get('/api/:id', user.get)
app.put('/api/:id', user.update)
app.delete('/api/:id', user.delete)

// Capturar todas las rutas 
app.get('*', (req, res) => {
  res.status(404).send('Esta pagina no existe')
})

// Endpoint GET - Obtener todo los datos 
/* 
app.get('/', (req, res) => {
  res.status(200)
  res.send('Hola Mundo')
})
 

// Endpoint GET - Obtener un Gegistro
app.get('/:id', (req, res) => {
  console.log(req.params)
  res.status(200)
  res.send(req.params)
})

// Endpoint POST
app.post('/', (req, res) => {
  res.status(201)
  res.send('Creando Dato')
})

//Endpoint PUT
app.put('/:id', (req, res) => {
  res.status(201)
  res.send('Creando Dato')
})

// Endpoint PATCH 
app.patch('/:id', (req, res) => {
  res.status(201)
  res.send('Creando Dato')
})
// Endpoint DELETE
app.delete('/:id', (req, res) => {
  res.status(201)
  res.send('Creando Dato')
})
*/


app.listen(port, () => {
  console.log(`El ejemplo se esta ejecutado en puerto ${port}`)
  console.log('Run in: http://localhost:3000/api')
})