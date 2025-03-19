import React from 'react'
import ChatMessage from './ChatMessage'

export default function OutputArea({text, output}) {
  return (
    <div id='out' className='grow bg-white overflow-y-scroll p-4 flex flex-col'>
      <ChatMessage sender={'SYSTEM'} content='You are now talking to our **AI Chatbot**' />
      <ChatMessage sender={'YOU'} content={text} />
      <ChatMessage sender={'BOT'} content={output} />
    </div>
  )
}