import React from 'react'
import ChatMessage from './ChatMessage'

const messageHistory = [
  {sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**"},
  {sender:"BOT", content:"Hello World"}
] /* Placeholder */

export default function OutputArea() {
  return (
    <div id='out' className='grow bg-white overflow-y-scroll flex flex-row'>
      <div className='grid items-center p-5 bg-[#BFC0C0]'>
        <p>{':)'}</p>
      </div>
      <div className='flex flex-col grow p-4'>
        {messageHistory.map((msg) => <ChatMessage sender={msg.sender} content={msg.content} />)}
      </div>
    </div>
  )
}