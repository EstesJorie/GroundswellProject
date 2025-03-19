import React from 'react'


export default function ChatMessage({sender, content}) {
    switch(sender) {
        case "GROQ":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#e85512] max-w-180 float-left p-2 rounded-lg'>
                        <p className='font-semibold'>{sender}</p>
                        <p>{content}</p>
                    </div>
                </div>
            );

        case "YOU":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#BFC0C0] max-w-180 float-right p-2 rounded-lg'>
                        <p className='font-semibold'>{sender}</p>
                        <p>{content}</p>
                    </div>
                </div>
            );
        default:
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-white border-1 border-black max-w-180 float-left p-2 rounded-lg'>
                        <p className='font-semibold'>{sender}</p>
                        <p>{content}</p>
                    </div>
                </div>
            );
    }
}
