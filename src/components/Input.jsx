import React, {useState} from 'react'



export default function Input({ setText, setFile, file }) {
        function handleFormSubmit(event) {
            setText(event.target.value);
            event.preventDefault()
            console.log('submitted')
        }

        const handleFileChange = async (e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          };
        
        //   const handleUpload = async () => {
            
        //   };

return (
        <>
        <div className='grid'>
        <form action="" id="text-form" className='p-4'>
            <textarea rows="10" name="text" placeholder='Start typing...'
             className="w-full p-3 mono rounded-xs text-white bg-[#284b63] placeholder-[#528DB7]" ></textarea>
             
             
             
      <div className="flow-root">
        <div className='float-left'>
        <input id="file" type="file" onChange={handleFileChange} className='border border-black rounded bg-white' />
      
      {file && (
        <section>
        </section>
      )}

      {file && (
        <button 
          
        ></button>
      )}
      </div>
    


            <button onClick={handleFormSubmit} className='rounded bg-green-500 p-2 float-right'>Submit</button>
            </div>
        </form>
 
        </div>
        </>
)}