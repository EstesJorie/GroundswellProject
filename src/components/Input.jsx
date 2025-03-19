import React, {useState} from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';


export default function Input({ setOutput, output, setText, text }) {
    const textRef = useRef(null)
    const [file, setFile] = useState(false);
    const [model, setModel] = useState(1)
    const [localText, setLocalText] = useState(text || "")

    useEffect(() => {
        console.log("Updated model value:", model);
    }, [model])

    const models = {
        'ChatGPT' : 1,
        'DeepSeek' : 2,
        'Gemini' : 3,
    }

    

        const handleFormSubmit = async (e) => {
            e.preventDefault()
            console.log(`${file.name} and ${localText}`)

            setText(localText)
            
            if (file || text!= '') {
                console.log('Uploading file...');
          
                const formData = new FormData();
                formData.append('file', file);
                formData.append('text', text)
                formData.append('model', model)
          
                try {
                  const result = await fetch('127.0.0.1:8000', {
                    method: 'POST',
                    body: formData,
                  });
          
                  const data = await result.json();
                  await setOutput(data)
                  
          
                  console.log(output);
                } catch (error) {
                  console.error(error);
                }
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
      <textarea rows="10" name="text" placeholder='Start typing...' onSubmit={handleTextChange}
       className="w-full p-3 mono rounded-xs text-black bg-[#E4ECF1] placeholder-[#6A7881] h-25" >
      </textarea>
        
      <div className="flow-root">
          <div className='float-left'>
              <input id="file" type="file" onChange={handleFileChange} className='border border-black rounded bg-white' />
          </div>

          <select onChange={handleModelChange}>
            <option value='ChatGPT'>ChatGPT</option>
            <option value='DeepSeek'>DeepSeek</option>
            <option value='Gemini'>Gemini</option>
          </select>
      
          <button type='submit' 
           className='button w-150 p-2 float-right mr-20'>
            Submit
          </button>
      </div>
    </form>
  </div>
)}