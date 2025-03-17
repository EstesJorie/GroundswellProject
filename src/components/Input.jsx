import React, {useState} from 'react'



export default function Input({ setText }) {
        function handleFormSubmit(event) {
            setText(event.target.value);
            event.preventDefault()
        }

return (
        <>
        <div>
        <form onSubmit={handleFormSubmit} action="" id="text-form">
            <textarea rows="10" name="text" placeholder='Start typing...'
             className="w-full p-3 mono rounded-xs text-white bg-[#284b63] placeholder-[#528DB7]" onChange={handleFormSubmit} ></textarea>
             <button className='bg-green-300 w-20 h-10'>Submit</button>
        </form>
 
        </div>
        </>
)}