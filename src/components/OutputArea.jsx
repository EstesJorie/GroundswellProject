import React from 'react'
import ChatMessage from './ChatMessage'

const messageHistory = [
  {key:0, sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**"},
  {key:1, sender:"BOT", content:"Hello World"}
] /* Placeholder */
/* not sure if key is meant to be done in this way */

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