import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PageDate from './pages/PageDate'
import PageForm from './pages/PageForm'
import Layout from './pages/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        < Route path='/date' element={<PageDate/>}/>
        < Route path='/form' element={<PageForm/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
