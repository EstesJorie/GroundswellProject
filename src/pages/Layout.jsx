import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

export default function Layout() {
  return (
    <div className='bg-red-500'>
        <NavBar />
        <Outlet />
    </div>
  )
}
