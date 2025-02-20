// import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { LoginPage,SignupPage } from './Routes/Route'
import {Home} from './Routes/Route'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
     
    </>
  )
}

export default App
