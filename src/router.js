const express = require('express');
const router = express.Router();

//(test)-------------------------------------------------------
router.get('/api',(req,res)=>{
    res.json({"api":"online"})
});


//(create Product)--------------------------------------------------------
const createProduct = require('./controllers/debt/create')
router.post('/api/createProduct',createProduct);

//(search Product)-------------------------------------------------------
const searchProduct = require('./controllers/debt/search');
router.get('/api/searchProduct',searchProduct);


//(search Product)-------------------------------------------------------
const searchProduct = require('./controllers/debt/search');
router.get('/api/searchProductID/:code',searchProduct);



//(delete Product)------------------------------------------------------
const delProduct = require('./controllers/delete')
router.delete('/api/Product/:id',delProduct);


module.exports= router;