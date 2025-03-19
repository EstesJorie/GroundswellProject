import React from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'


/* not sure if key is meant to be done in this way */

export default function OutputArea({text}) {
  const messageHistory = [
    {key:0, sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**"},
    {key:1, sender:"BOT", content:"Hello World"}
  ] /* Placeholder */

  useEffect(() => {
    messageHistory[messageHistory.length-1] 
    console.log(messageHistory)
  }, [text])
  return (
    <div id='out' className='grow bg-white flex flex-row'>
      <div className='grid items-center p-5 bg-[#BFC0C0]'>
        <p>{':)'}</p>
      </div>
      <div className='flex flex-col grow p-4 overflow-y-scroll'>
        {messageHistory.map((msg) => <ChatMessage sender={msg.sender} content={msg.content} />)}
      </div>
    </div>
  )
}