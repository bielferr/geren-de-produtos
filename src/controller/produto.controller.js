const productService = require('../services/product.service')


async function getProductsAll(req, res){
    const product  = await productService.getProductsAll()
    res.status(200).json(product) 
}


async function getProductById(req, res){
    const product = await productService.getProductById(req.params.id)
    
  
    res.status(200).json(product)
}

async function createProduct(req, res){
    const newproduct = await productService.createProduct(req.body)

    res.status(201).json(newproduct)
}

async function updateProduct(req, res){
    const update = await productService.updateProduct(req.params.id, req.body)

    res.status(200).json(update)
}



async function deleteProduct(req, res){
    await productService.deleteProduct(req.params.id)

    res.status(200).json({message: 'product deleted successfully'})
}

module.exports = {
    getProductsAll,
    createProduct,
    updateProduct ,
    getProductById,
    deleteProduct

    }

//     ✔ controller limpo (sem lógica de regra)
// ✔ service centralizando regras
// ✔ CRUD completo
// ✔ uso correto de params e body
// ✔ status HTTP correto (200 / 201)