import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

export default function Layout() {
  return (
    <div className='min-h-full flex flex-col grow'>
        <NavBar />
        <Outlet />
    </div>
  )
}
