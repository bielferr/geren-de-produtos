const AppError = require('../utils/AppError')
let products = []



function getProductsAll(){
 return products
}

function getProductById(id){

   const product =  products.find(p => p.id === Number(id))

   if(!product){
    throw new AppError("Product not found", 404)
   }
    return product
}

function createProduct(data){
    const newProduct = {
        id: Date.now(),
        ...data
    }
    products.push(newProduct)
    return newProduct
}



function updateProduct(id, data){
    const index = products.findIndex(p => p.id === Number(id))

    if (index === -1){
        throw new AppError("Product not found", 404)
    }

    products[index] ={ 
        ...products[index],
        ...data
    }
    return products[index]
}

function deleteProduct(id) {
    const before = products.length
    products = products.filter(p => p.id !== Number(id))

    if (before === products.length){
        throw new AppError("Product not found", 404)
    }
    return true

}




module.exports = {
    deleteProduct,
    getProductsAll,
    createProduct,
    getProductById,
    updateProduct
}   


// find() é usado para percorrer um array e retornar o primeiro 
// elemento que satisfaz a condição de uma função de teste
// . Se nenhum elemento passar no teste, ele retorna


// 🧠 REGRA DE OURO DO SERVICE
// ❌ NÃO FAZ:
// req.body
// res.json
// validação HTTP
// rotas
// ✅ FAZ:
// manipula dados
// aplica lógica
// retorna resultado

// Service:
// cria objeto
// salva no array
// retorna produto

// ROUTE → CONTROLLER → SERVICE → CONTROLLER → RESPONSE

