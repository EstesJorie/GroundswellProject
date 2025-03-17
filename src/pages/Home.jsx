import React, { useState } from 'react'
import Input from '../components/Input'
import FileUpload from '../components/FileUpload'

export default function Home() {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null);

  return (
    <>
      <Input setText={setText}/>
      <FileUpload setFile={setFile} file={file}/>
    </>
  )
}
