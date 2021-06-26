const express = require('express')
const mongoose = require('mongoose')
const router = require('./src/router')
const cors = require('cors')
require('dotenv/config');

const api = express()

mongoose.connect("mongodb+srv://jhonatan:jaq123db@cluster0-zf4uw.mongodb.net/product?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology: true})
api.use(express.json());
api.use(cors());



//(router)------------------------------------------------------------------------------------
api.use('/',router)

const PORT = 3000 || 8877;

api.listen(`${PORT}`,()=>{console.log({PORT})})