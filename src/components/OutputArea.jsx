import React from 'react'
import ChatMessage from './ChatMessage'
import { useState,useEffect } from 'react'

export default function OutputArea({text, output, setText}) {
  const [messageHistory, setMessageHistory] = useState([
    {key:0, sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**"}
  ]) // {key:1, sender:"BOT", content:"Hello World"}
  console.log(typeof messageHistory)


  useEffect(() => {
    if (text !== '') {
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
    <div id='out' className='h-0 grow bg-white flex flex-row overflow-auto'>
      <div className='flex flex-col grow p-4 '>
        {messageHistory.map((msg) => <ChatMessage sender={msg.sender} content={msg.content} />)}
      </div>
    </div>
  )
}
//overflow-y-scroll