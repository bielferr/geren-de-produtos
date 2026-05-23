const productService = require('../services/product.service')




function getProductsAll(req, res){
    const data = productService.getProductsAll()
    res.status(200).json(data) 
}


function getProductById(req, res){
    const product = productService.getProductById(req.params.id)
    
  
    res.status(200).json(product)
}

function createProduct(req, res){
    const newproduct = productService.createProduct(req.body)

    res.status(201).json(newproduct)
}

function updateProduct(req, res){
    const update = productService.updateProduct(req.params.id, req.body)

    res.status(200).json(update)
}



function deleteProduct(req, res){
    const deleted = productService.deleteProduct(req.params.id)

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