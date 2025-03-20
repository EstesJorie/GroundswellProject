import React, {useState} from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';


export default function Input({ setOutput, output, setText, text }) {
    const textRef = useRef(null)
    const [file, setFile] = useState(false);
    const [model, setModel] = useState(1)
    const [localText, setLocalText] = useState("")

    useEffect(() => {
        console.log("Updated model value:", model);
    }, [model])

    const models = {
        'Gemma': 1,
        'Llama-Guard': 2,
        'Llama3-70b': 3,
        'Llama3-8b': 4,
        'Mixtral': 5,
        'DeepSeek-Qwen': 6,
        'DeepSeek-Llama-Spec': 7,
        'DeepSeek-Llama': 8,
    }

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log(`${file?.name} and ${localText}`);
  
      setText(localText);
      setLocalText('')
      
      if (file || text !== '') {
          console.log('Uploading file...');
    
          const formData = new FormData();
          formData.append('file', file);
          formData.append('text', localText); // Changed from text to localText
          formData.append('model', model);
    
          try {
              // Updated URL with http:// prefix and correct endpoint
              const result = await fetch('http://127.0.0.1:8000/upload', {
                  method: 'POST',
                  body: formData,
                  headers: {
                      // Remove Content-Type header to let browser set it with boundary
                      'Accept': 'application/json',
                  },
              });
  
              if (!result.ok) {
                  throw new Error(`HTTP error! status: ${result.status}`);
              }
              
              const data = await result.json();
              setOutput(data);
              
              console.log('Response:', data);
          } catch (error) {
              console.error('Error uploading file:', error);
              alert('Error uploading file. Please try again.');
          }
      } else {
          console.log('Please attach a file');
      }
  }

        const handleTextChange = async (e) => {
            setLocalText(e.target.value);
            console.log(localText)
        };

        const handleFileChange = async (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
            }
        };
        
        const handleModelChange = async (e) => {
            console.log(e.target.value)
            setModel(models[e.target.value])
            
        }

return (
  <div className='grid w-full flex-none'>
    <form action="submit" id="text-form" className='p-4' onSubmit={handleFormSubmit}>
    <textarea 
      rows="10" 
      name="text" 
      placeholder='Start typing...' 
      onChange={handleTextChange}
      value={localText}
      className="w-full p-3 mono rounded-xs text-black bg-[#E4ECF1] placeholder-[#6A7881] h-25" onKeyDown={(e) => {
        if (e.key === "Enter")
            handleFormSubmit(e);
        }}
    >
    </textarea>
        
      <div className="flow-root">
          <div className='float-left'>
              <input id="file" type="file" onChange={handleFileChange} className='border border-black rounded bg-white' />
          </div>
          <select onChange={handleModelChange} className='border border-black rounded bg-white font-semibold'>
            <option value='Gemma'>Gemini</option>
            <option value='Llama-Guard'>Llama-Guard</option>
            <option value='Llama3-70b'>Llama3-70b</option>
            <option value='Mixtral'>Mixtral</option>
            <option value='Deepseek-Qwen'>Deepseek-Qwen</option>
            <option value='Deepseek-Llama-Spec'>Deepseek-Llama-Spec</option>
            <option value='Deepseek-Llama'>Deepseek-Llama</option>
          </select>
      
          <button type='submit' 
           className='button w-150 p-2 float-right mr-20' >
            Submit
          </button>
      </div>
    </form>
  </div>
)}