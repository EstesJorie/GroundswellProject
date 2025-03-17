import React from 'react'
import { Link } from 'react-router'

export default function NavBar() {
  return (
    <div className="flex items-center gap-4 p-4 border bg-blue-900 text-white w-full">
        <Link to="/">Home</Link>
    </div>
  )
}
