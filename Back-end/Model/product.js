const mongoose=requre('mongoose');


const productSchema= new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        default:[]
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match:[/.+@.+\..+/ ]
    },
    images:{
            type:[String],
            required:[true]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

},
{timestamps:true,})
module.exports=mongoose.model("product",productSchema)
