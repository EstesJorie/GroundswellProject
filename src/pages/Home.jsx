import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import OutputArea from '../components/OutputArea.jsx'
import Heading from '../components/Heading.jsx'

export default function Home() {
  const [output, setOutput] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState(false);

  return (
    <div className='bg-[#3e5060] max-h-full w-full flex flex-col grow'>
      <Heading text={text} />
      <OutputArea output={output} text={text} setText={setText} file={file} />
      <Input setOutput={setOutput} setText={setText} text={text} setFile={setFile} />
    </div>
  )
}
