import React, { useState } from 'react'
import Input from '../components/Input.jsx'
import OutputArea from '../components/OutputArea.jsx'
import Heading from '../components/Heading.jsx'

export default function Home() {
  const [output, setOutput] = useState('')
  const [text, setText] = useState('')

  return (
<<<<<<< HEAD
    <div className='bg-[#3e5060] min-h-full w-full flex flex-col grow'>
=======
    <div className='bg-[#6D97B0] min-h-full w-full flex flex-col grow'>
>>>>>>> e80df13bd56cf2ea79ee1ce3b69ecd42164b45d0
      <Heading text={text} />
      <OutputArea />
      <Input setOutput={setOutput} setText={setText} text={text} />
    </div>
  )
}
