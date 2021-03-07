const express = require('express')
const conectarDB = require('./config/db')
const cors = require("cors")

// CREAR SERVIDOR
const app = express()

// Conectar a base de datos
conectarDB()

// Habilitar CORS
app.use(cors())

// Habilitar express.json. Permitir datos que el usuario envíe.
app.use(express.json({extended:true}))

// PUERTO DE LA APP
const PORT = process.env.PORT || 4000

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))

// DEFINIR LA PÁGINA PRINCIPAL
app.get('/', (req,res) => {
    res.send("Hola mundo")
})


// ARRANCAR LA APP
app.listen(PORT, () => {
    console.log("El servidor está funcionando")
})