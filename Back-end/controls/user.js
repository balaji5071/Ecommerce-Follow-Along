const express = require('express')
const {upload} = require('../multer')
const user = require('../Model/user')
const path = require('path')
const  ErrorHandler = require('../util/Error')
const fs = require('fs')
const errorHandle = require('../util/Error')
const user = require('../Model/user')
const router=express.Router()


router.post('/create',upload.single('file'), async (req, res, next)=>{
    const  {name,email,password}=req.body
    
    const existUser= user.findOne({email})


if(existUser)
{
    if(req.file){
        const fileName = path.join(__dirname,'..','uploads',req.file.name)
        if(fs.existsSync(fileName))
            fs.unlinkSync(fileName)
    }
    return next(new ErrorHandler('user already exist',400))
}


if(!req.file)
    return next(new ErrorHandler('send all the required fields',400))

const fileName = req.file.filename
const fileUrl = path.join(__dirname,'..','uploads',fileName)

const newUser ={
    name,
    password,
    email,
    avatar:{url:fileUrl, id:fileName}

}


try{
    await newUser.save()
    console.log(user)
}catch(e){
    console.log(e.message)
}


})


router.post('./login',async(req,res,next)=>{
    const{email,password}=req.body
    if(!email || !password)
        return next(new ErrorHandler("all fileds are required ",400))
    const user=user.findOne({email})
    if(!user)
        return next (new ErrorHandler("user dosen't exist",400))
    const validPassword = user.comparePassword(password)
    if(!validPassword)
        return next(new ErrorHandler("wrong password",400))
    res.status(200).json({message:"success",user})
    
})

module.exports = router ;
