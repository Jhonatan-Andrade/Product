const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true,
    },
    productCode:{
        type:String,
        require:true,
    },
    medida:{
        type:String,
        require:true,
    },
    tipo:{
        type:Boolean,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('Product', dbSchema);