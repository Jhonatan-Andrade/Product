

const Product = require('../../models/SchemaProduct')

let searchProduct= async(req, res)=>{
    try {
        let product = await Product.findByAll()
        return res.json(product)
    } catch (error) {
        return res.json({error})
    }
   
}
module.exports = searchProduct