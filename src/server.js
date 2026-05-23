const express = require('express')

const app  = express()
const logger = require('./middleware/logger')
const productsRoutes = require('./routes/products.routes')

app.use(express.json())

app.use(logger)

app.use(productsRoutes)


const PORT = process.env.PORT || 5555

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

// routes só conectam URL → função
// controller só lida com req/res e lógica
// server.js só inicializa tudo
// não misturar responsabilidades