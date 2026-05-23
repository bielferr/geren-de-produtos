function validateProduct(req, res, next){

    const {name, price, quantity} = req.body;

    if(!name || typeof name !== 'string' || name.trim() === ''){
        return res.status(400).json({message: "name is required"});
    }
    if(price == null || typeof price !== 'number' ){
        return res.status(400).json({message: "price is required "});

    } else {
        if(price < 0){
            return res.status(400).json({message: "price must be a positive number"});
        }
    }

    if (quantity == null || typeof quantity !== 'number' ){
        return res.status(400).json({message: "quantity is required"});
    } else {
        if(quantity < 0){
            return res.status(400).json({message: "quantity must be a positive number"});
        }

    }
    next();
}
module.exports = validateProduct;