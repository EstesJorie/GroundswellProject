import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'


function App() {
  return (
      <Routes>
        <Route  path='/' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
  )
}

export default App