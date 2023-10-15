const Product = require('../Models/product');

//Creatintg a new product
async function creatProduct(req, res){
    try{
        const product = await Product.create(req.body);
        res.status(201).json({ product });
    }
    catch(err){
        res.status(500).json({ err: err.message });
    }
}

//get all products
async function getAllProducts(req, res){
    try{
        const products = await Product.find();
        res.json(products)
    }
    catch(err){
        res.status(500).json({ err: err.message });
    }
}

// to make visible to other files
module.exports = {
    creatProduct,
};