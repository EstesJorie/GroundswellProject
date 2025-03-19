import React, {useState} from 'react'
import { useRef } from 'react';



export default function Input({ setOutput }) {
    const textRef = useRef(null)
    const [text, setText] = useState('')
    const [file, setFile] = useState(null);


        const handleFormSubmit = async (e) => {
            // setText(textRef.current.value);
            e.preventDefault()
            console.log(`${file.name} and ${text}`)
            
            if (file) {
                console.log('Uploading file...');
          
                const formData = new FormData();
                formData.append('file', file);
                formData.append('text', text)
          
                try {
                  // You can write the URL of your server or any other endpoint used for file upload
                  const result = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    body: formData,
                  });
          
                  const data = await result.json();
                  await setOutput(data)
          
                  console.log(data);
                } catch (error) {
                  console.error(error);
                }
              }
        }

        const handleTextChange = (e) => {
            setText(e.target.value)
            console.log(e.target.value)
        }

        const handleFileChange = async (e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          };
        
        //   const handleUpload = async () => {
            
        //   };

return (
  <div className='grid w-full flex-none'>
    <form action="submit" id="text-form" className='p-4'>
      <textarea rows="10" name="text" placeholder='Start typing...' onChange={handleTextChange}
       className="w-full p-3 mono rounded-xs text-black bg-[#E4ECF1] placeholder-[#6A7881] h-25" >
      </textarea>
        
      <div className="flow-root">
          <div className='float-left'>
              <input id="file" type="file" onChange={handleFileChange} className='border border-black rounded bg-white' />
          </div>
      
          <button onClick={handleFormSubmit} 
           className='button w-150 p-2 float-right mr-20'>
            Submit
          </button>
      </div>
    </form>
  </div>
)}