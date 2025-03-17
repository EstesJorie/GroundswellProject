import React, { useState } from 'react'
import Input from '../components/Input'
import Heading from '../components/Heading'

export default function Home() {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null);

  return (
    <>
    <div className='bg-blue-200 min-h-screen'>
      <Heading />
      <Input setText={setText} setFile={setFile} file={file}/>
      </div>
    </>
  )
}
