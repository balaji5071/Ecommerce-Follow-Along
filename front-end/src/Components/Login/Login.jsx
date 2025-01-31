import React from 'react'
import { useState } from 'react'
import { IoMailSharp } from "react-icons/io5";
const Login = () => {
    const [email,setEmail]=useState('')
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl shadow-black-600 rounded-xl '>
        <div>
            <h1 className='text-center text-2xl font-bold'>User Login</h1>
        </div>
        <div className='w-full'>
            <form className='w-full flex flex-col justify-center items-center mt-5'>
            <div>
                <input type='email' required autoComplete='email' name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <IoMailSharp />
                </div>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Login