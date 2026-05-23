const express = require('express')

const router = express.Router();
const {getProductsAll, createProduct, getProductById, updateProduct, deleteProduct} = require('../controller/produto.controller');
const validateProduct = require('../middleware/validadeProduct');


router.get('/products', getProductsAll);
router.get('/products/:id', getProductById);
router.post('/products', validateProduct ,createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;