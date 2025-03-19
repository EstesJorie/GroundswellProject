import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import OutputArea from '../components/OutputArea.jsx'
import Heading from '../components/Heading.jsx'

export default function Home() {
  const [Output, setOutput] = useState('')

  return (
    <div className='bg-white h-full w-full flex flex-col'>
      <Heading />
      <OutputArea />
      <Input setOutput={setOutput}/>
    </div>
  )
}
