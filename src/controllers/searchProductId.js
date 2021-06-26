

const Product = require('../models/SchemaProduct')

let searchProductId= async(req, res)=>{
    try {
        let product = await Product.find({_id:req.body.id})
        return res.json(product)
    } catch (error) {
        return res.json({error})
    }
   
}
module.exports = searchProductId