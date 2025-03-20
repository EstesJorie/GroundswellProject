import React from 'react'
import ChatMessage from './ChatMessage'
import { useState,useEffect } from 'react'

// Image cycling loader component
const ImageCyclingLoader = ({ 
  images = [
    "../images/Emote_NERD.png",
    "../images/Emote_Happy.png",
    "../images/Emote_Cry.png",
    "../images/Emote_Shock.png"
  ],
  interval = 600,
  size = 50,
  className = ''
  }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
  return () => clearInterval(intervalId);
    }, [images.length, interval]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center transition-all duration-300 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <img 
              src={image} 
              alt={`Loading ${index + 1}`} 
              className="w-full h-full object-contain"
              style={{ maxWidth: size/2, maxHeight: size/2 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function OutputArea({text, output, setText, file}) {
  const [messageHistory, setMessageHistory] = useState([
    {key:0, sender:"SYSTEM", content:"You are now talking to our **AI Chatbot**", file_label:null}
  ]) // {key:1, sender:"BOT", content:"Hello World"}
  console.log(typeof messageHistory)

  const [isLoading, setIsLoading] = useState(false);
  const [previousOutput, setPreviousOutput] = useState("");

  const loadingImages = [
    "../images/Emote_NERD.png",
    "../images/Emote_Happy.png",
    "../images/Emote_Cry.png",
    "../images/Emote_Shock.png"
  ];

  useEffect(() => {
    if(file!=null) {
      var file_label = file.name;
    }
    else {
      var file_label = null
    }
    if (text !== '') {
      setMessageHistory(prevMessages => [
        ...prevMessages, 
        {key: prevMessages.length, sender: "YOU", content: text, file_label:file_label}
      ]);
      setIsLoading(true);
    }
  }, [text])
  
  useEffect(() => {
    if (output && output !== previousOutput) {
      setPreviousOutput(output);

      setMessageHistory(prevMessages => [
        ...prevMessages, 
        {key: prevMessages.length, sender: "BOT", content: output, file_label:null}
      ]);

      setIsLoading(false);
    }
  }, [output, previousOutput]);

  useEffect(() => {
    let timeoutId;
    
    if (isLoading) {
      timeoutId = setTimeout(() => {
        console.log("Loading timeout reached - resetting loading state");
        setIsLoading(false);
      }, 30000); 
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    }, [isLoading]);

  return (
    <div id='out' className='h-0 grow bg-white flex flex-row overflow-auto'>
      <div className='flex flex-col grow p-4 '>
        {messageHistory.map((msg) => <ChatMessage sender={msg.sender} content={msg.content} file_label={msg.file_label} />)}
        
        {}
        {isLoading && (
          <div className="py-3 flex justify-center items-center">
            <ImageCyclingLoader 
              images={loadingImages}
              interval={400}
              size={80}
            />
          </div>
        )}
      </div>
    </div>
  );
}
//overflow-y-scroll