const express=require('express')
const user=require('./controls/user')
const ErrorHandler=require('./util/Error')
const cors=require('cors')
const app =express();


app.use(cors)
app.use(express.json())
app.use(express.static('uploads'))




// type of environment : 2 typed: development , production 
if(process.env.NODE_ENV !== 'PRODUCTION')
    require('dotenv').config({path:'Back-end/configure/.env'})
   //not in production environment importing dotenv
app.use('/api',user)

app.use(ErrorHandler)
module.exports=app;