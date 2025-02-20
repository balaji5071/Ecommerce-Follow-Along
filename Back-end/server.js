const app =require('./app')
const connectDb=require('./db/db')


connectDb()

//synchronous error-->try and catch// if we are not using try and catch block-->error will be catched here
process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`)
    console.log(`submitting down the server for handling the uncaught exception`)

})

if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({path:'backend/config/.env'})
}


const server =app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection-->asynchronous //try and catch// if we are not using try and catch block-->error will be catched here
process.on('unhandledRejection',(err)=>{
    console.log(`server is shuttimg down for ${err.message}`)

    server.close(()=>{
        process.exit(1);//exit(1)-->with error exit ..exit(0)-->without error it will exit
    })
})