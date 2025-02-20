const multer = require('multer') //for file handling
const path= require('path')

const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,'uploads/')//cb(errroe ,null)
},
filename:(req,file,cb)=>{
    const uniSuffix = Date.now()+ Math.round(Math.random()*1e9)//
    const fileName = file.originalname.split('.')[0]
    const extention = path.extname(file.originalname)
    cb(null,uniSuffix+fileName+extention)
     
}

})
const upload = multer({storage:storage})
module.exports = {upload};


