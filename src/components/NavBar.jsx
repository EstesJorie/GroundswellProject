import React from 'react'
import { Link } from 'react-router'

export default function NavBar() {
  return (
    <div className="flex-none flex items-center gap-4 p-4 bg-gradient-to-r from-[#345061] to-[#18252D] text-white w-full">
        <Link to="/">Home</Link>
    </div>
  )
}
