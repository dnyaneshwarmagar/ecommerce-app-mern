import { useState } from 'react'
import './App.css'
import { Outlet} from "react-router-dom"
import Home from './pages/Home'


function App() {

  return (
    <>
        <Outlet/>
    </>
  )
}

export default App
