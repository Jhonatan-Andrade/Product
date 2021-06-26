
const Product = require('../models/SchemaProduct')

let delProduct = async(req, res)=>{
    try {
        await Product.findByIdAndRemove(req.params.id)
        return res.send('deletado')
    } catch (error) {
        return res.json({error} )
    }
}
module.exports = delProduct