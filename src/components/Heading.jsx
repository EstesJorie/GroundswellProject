import React from 'react'
import { useState, useEffect} from 'react'

export default function Heading({text}) {
    const [image, setImage] = useState("../images/Glasses_Black.png")

    useEffect(() => {
        setImage(images[Math.floor(Math.random() * images.length)])
        console.log(image)
        }, [text])

    const images = [
        "../images/Emote_NERD.png",
        "../images/Emote_Happy.png",
        "../images/Emote_Cry.png",
        "../images/Emote_Shock.png"
    ]

    
    
  return (
<<<<<<< HEAD
    <div className='flex flex-row flex-none p-1 pt-2 bg-[#3e5060]'>
        <img className='h-20 p-1' src="../images/Glasses_White.png" alt="Groundswell logo" />
        <img className='h-20 ml-3 content-between' src='../images/Groundswell Logo_White.png' />
=======
    <div className='flex flex-row flex-none p-1 pt-2 bg-[#6D97B0]'>
        <img className='h-12 p-1' src="../images/Glasses_Black.png" alt="Groundswell logo" />
        <img className='h-10 ml-3 content-between' src='../images/Groundswell Logo_Black.png' />
>>>>>>> e80df13bd56cf2ea79ee1ce3b69ecd42164b45d0
    </div>
  )
}
