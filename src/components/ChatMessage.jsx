import React from 'react'
import Markdown from 'react-markdown'

export function parseMarkdown(markdown) {
    // Split text by double newlines (standard paragraph breaks)
    const paragraphs = markdown.split(/\n+/);
    
    // Create an array of paragraph elements
    const paragraphElements = paragraphs.map((paragraph, index) => {
        // Trim to remove any leading/trailing whitespace
        const trimmedParagraph = paragraph.trim();
        
        if (trimmedParagraph) {
            return (
                <p key={index} className="mb-4">
                    <Markdown>{trimmedParagraph}</Markdown>
                </p>
            );
        }
        return null;
    }).filter(Boolean); // Remove any null elements
    
    return <>{paragraphElements}</>;
}

export default function ChatMessage({sender, content}) {
    switch(sender) {
        case "BOT":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#ff7c40] max-w-180 float-left p-2 rounded-lg' >
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                    </div>
                </div>
            );

        case "YOU":
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-[#BFC0C0] max-w-180 float-right p-2 rounded-lg'>
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                    </div>
                </div>
            );
        default:
            return (
                <div className='w-full flex-none p-1'>
                    <div className='bg-white border-1 border-black max-w-180 float-left p-2 rounded-lg'>
                        <p className='font-semibold'>{sender}</p>
                        {parseMarkdown(content)}
                    </div>
                </div>
            );
    }
}
