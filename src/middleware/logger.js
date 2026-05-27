function logger (req, res, next){
    console.log(`${req.method} ${req.originalUrl}`)
    next()
}

module.exports = logger



// ✔ req.method

// Mostra o tipo da requisição:

// GET
// POST
// PUT
// DELETE
// ✔ req.url

// Mostra a rota chamada:

// /products
// /product/1
// ✔ next()

// 👉 ESSENCIAL

// Significa:

// “pode continuar o fluxo da requisição”

// Sem isso, a API trava