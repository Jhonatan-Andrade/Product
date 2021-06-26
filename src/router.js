const express = require('express');
const router = express.Router();

//(test)-------------------------------------------------------
router.get('/api',(req,res)=>{
    res.json({"api":"online"})
});


//(create Product)--------------------------------------------------------
const createProduct = require('./controllers/create')
router.post('/api/createProduct',createProduct);

//(search Product)-------------------------------------------------------
const searchProduct = require('./controllers/search');
router.get('/api/searchProduct',searchProduct);


//(search Product)-------------------------------------------------------
const searchProductId = require('./controllers/searchProductId');
router.post('/api/searchProduct',searchProductId);



//(delete Product)------------------------------------------------------
const delProduct = require('./controllers/delete')
router.delete('/api/delProduct/:id',delProduct);


module.exports= router;