import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

export default function Layout() {
  return (
    <div className='h-full w-screen grow flex flex-col'>
        {/* <NavBar /> */}
        <Outlet />
    </div>
  )
}
