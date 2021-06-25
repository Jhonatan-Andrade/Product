
const Product = require('../models/SchemaProduct')


let createProduct = async(req, res)=>{

    if(!req.body[0].productName){
     
        return res.send({"error":'productName  invalido'}) 
    }
    else if(!req.body[0].productCode){
    
        return res.send({"error":'productCode invalido'}) 

    }else if(!req.body[0].medida){
    
        return res.send({"error":'medida invalido'})  

    }else if(!req.body[0].tipo){
    
        return res.send({"error":'tipo invalida'})  

    }else{
        try {
            let product = await Product.create(req.body)
        
            return res.json(product) 

        } catch (error) {
            return res.json(error)
        }
    }
}
module.exports = createProduct