const express=require('express')

const app =express();




if(process.env.NODE_ENV !== 'PRODUCTION')
    require('dotenv').config({path:'config/.env'})

require('dotenv').config({path:'Back-end/configure/.env'})
module.exports=app;