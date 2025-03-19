import React from 'react'

export default function OutputBox({output}) {
  return (
    <div className='grid p-4'>
    <span className="w-full h-50 p-3 mono rounded-lg shadow-sm shadow-gray-300 text-white bg-[#9cceef] mb-2">{output}</span>
    </div>
  )
}
