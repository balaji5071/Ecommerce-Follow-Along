import React from 'react'
import { MdCategory } from 'react-icons/md'

function product() {
    const [email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState(0)
    const[stock,setStock]=useState(0)
    const[category,setCategory]=useState('')
    const[tags,setTags]=useState([])
    const[image,setImage]=uuseState([])
    // const(prevImage,setPrevImage)=usetate([])
    const categoryData=[{
        title:'fashion'
    },
    {title:'electronics'},
    {title:'stationary'},
    {title:'home appliance'}
]

    const handleImage=(e)=>{
        const file=Array.form(e.target.file)
        setImages((previImages)=>[...previImages,...file])
        const preImg=images.map(file=>{URL.createObjectURL(file)})
        setPreviewImage(Prev=>[...prev,preImg])
    }
      return (
 <>
 <div>
     <h1>create Product</h1>
     <form action="">
        <div>
            <lable>Email<span className='text-red-500'>*</span></lable>
           <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='enter your email'/> 

        </div>
        <div>
            <lable>Name <span className='text-red-500'>*</span></lable>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name ' />
        </div>
        
        <div>
            <label>Description <span className='text-red-500'>*</span></label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='product descrption'></textarea>
        </div>
        <div>
            <lable>category<span>*</span></lable>
            <select value={category} onChange={(e)=>(setCategory(e.taaget.value))} required>
                <option>select an option</option>
                {
                    categoryData.map((item,ind)=>(
                        <option value={item.title} key={ind}>{item.title}</option>
                    ))
                }
            </select>
            
        </div>
        
        <div>
            <label>tags</label>
            <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} />
        </div>
        <div>
            <label>price</label>
            <input type="Number" value={price} onChange={(e)=>setPrice(e.target.value)} />
             
        </div>
        <div>
            <label >Stock</label>
            <input type="Number" value={stock} onChange={(e)=>setStock(e.target.value)} />
        </div>
        <div>
            <label >upload Image</label>
            <input type="file" value={images} multiple onChange={handleImage()} />
            <div>{prevImage.map((image,index)=>{

                return(
                    <img src={images} key={index} className='w-[50px] h-[50px]' />
                )
            })}
                </div>
        </div>
     </form>
 </div>
 </>
  )
}

export default product