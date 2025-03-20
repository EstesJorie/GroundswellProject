import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import OutputArea from '../components/OutputArea.jsx'
import Heading from '../components/Heading.jsx'

export default function Home() {
  const [output, setOutput] = useState('')
  const [text, setText] = useState('')

  return (
    <div className='bg-[#3e5060] min-h-full w-full flex flex-col grow'>
      <Heading text={text} />
      <OutputArea output={output} setText={setText} text={text} />
      <Input setOutput={setOutput} setText={setText} text={text} />
    </div>
  )
}
