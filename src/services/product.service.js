const AppError = require('../utils/AppError')
const prisma = require('../lib/prisma')


async function getProductsAll(){
    const products = await prisma.product.findMany()
return products
}

async function getProductById(id){
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

   if(!product){
    throw new AppError("Product not found", 404)
   }
    return product
}

async function createProduct(data){
    const newProduct = await prisma.product.create({
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity
        }
    })
    return newProduct
}



async function updateProduct(id, data){
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

    if (!product) {
        throw new AppError("Product not found", 404)
    }

    const updatedProduct = await prisma.product.update({
        where: {
            id: Number(id)
        },
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity
        }
    })

    return updatedProduct
}

async function deleteProduct(id) {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

    if (!product) {
        throw new AppError("Product not found", 404)
    }

    await prisma.product.delete({
        where: {
            id: Number(id)
        }
    })

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
// // salva no banco de dados
// retorna produto

// ROUTE → CONTROLLER → SERVICE → CONTROLLER → RESPONSE
// Routes
// ↓
// Controllers
// ↓
// Services
// ↓
// Prisma
// ↓
// PostgreSQL
