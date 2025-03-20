import React from 'react'
import Markdown from 'react-markdown'

export function parseMarkdown(markdown) {
    // Split text by double newlines (standard paragraph breaks)
    const paragraphs = markdown.split(/\n\n+/);
    
    // Create an array of paragraph elements
    const paragraphElements = paragraphs.map((paragraph, index) => (
        <div key={index} className="mb-4">
            <Markdown>{paragraph}</Markdown>
        </div>
    ));
    
    return <>{paragraphElements}</>;
}

export function FileIcon(file_label) {
    if(file_label==null) {
        return (
            <></>
        )
    }
    else {
        return (
            <p> <a className='border-1 rounded-full p-1 bg-[#E4ECF1]'>📄{file_label}</a></p>
        )
    }
}

export default function ChatMessage({sender, content, file_label=null}) {
    switch(sender) {
        case "BOT":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#ff7c40] max-w-180 float-left p-2 rounded-lg text-wrap' >
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                        {FileIcon(file_label)}
                    </div>
                </div>
            );

        case "YOU":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#BFC0C0] max-w-180 float-right p-2 rounded-lg text-wrap'>
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                        {FileIcon(file_label)}
                    </div>
                </div>
            );
        default:
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-white border-1 border-black max-w-180 float-left p-2 rounded-lg text-wrap'>
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                        {FileIcon(file_label)}
                    </div>
                </div>
            );
    }
}
