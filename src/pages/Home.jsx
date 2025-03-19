import React, { useState } from 'react'
import Input from '../components/Input'
import Heading from '../components/Heading'

export default function Home() {
  const [Output, setOutput] = useState('')

  return (
    <>
    <div className='bg-white min-h-screen'>
      <Heading />
      <Input setOutput={setOutput}/>
      </div>
    </>
  )
}
