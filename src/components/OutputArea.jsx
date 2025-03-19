import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'


/* not sure if key is meant to be done in this way */

export default function OutputArea({text, output}) {
  const [messageHistory, setMessageHistory] = useState([
    {key:0, sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**"}
  ]) // {key:1, sender:"BOT", content:"Hello World"}
  console.log(typeof messageHistory)


  useEffect(() => {
    if (text) {
      setMessageHistory(prevMessages => [
        ...prevMessages, 
        {key: prevMessages.length, sender: "YOU", content: text}
      ]);
    }
  }, [text])
  
  useEffect(() => {
    if (output) {
      setMessageHistory(prevMessages => [
        ...prevMessages, 
        {key: prevMessages.length, sender: "BOT", content: output}
      ]);
    }
  }, [output])

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