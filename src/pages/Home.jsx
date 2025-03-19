import React, { useState } from 'react'
import Input from '../components/Input'
import Heading from '../components/Heading'
import OutputBox from '../components/OutputBox'

export default function Home() {
  const [output, setOutput] = useState('')

  return (
    <>
    <div className='bg-white min-h-screen'>
      <Heading />
      <Input setOutput={setOutput} output={output} />
      <OutputBox output={output} />
      </div>
    </>
  )
}
