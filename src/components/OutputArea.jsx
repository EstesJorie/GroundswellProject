import React from 'react'
import ChatMessage from './ChatMessage'

export default function OutputArea() {
  return (
    <div id='out' className='grow bg-white overflow-y-scroll p-4 flex flex-col'>
      <ChatMessage sender={'SYSTEM'} content='You are now talking to **Groq**' />
      <ChatMessage sender={'YOU'} content='Hi Groq' />
      <ChatMessage sender={'GROQ'} content='*Hello World*' />
    </div>
  )
}