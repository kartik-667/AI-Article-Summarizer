import React from 'react'
import { logo } from '../../assets'
// import '../App.css'

function Hero() {
  return (
    <header className='flex flex-col w-full gap-4 mb-3 '>
        <nav className='flex flex-row justify-between p-4 items-center  '>
            <img src={logo} alt="logo_image" />

            <button className='p-2 m-4  bg-black text-white rounded-md hover:scale-110 transition-all' onClick={()=> window.open("https://github.com/kartik-667")}>Github</button>
        </nav>
        <h1 className='mb-0 text-5xl w-full items-center flex flex-col'>Summarize Text 
            <br />
        <span className='text-orange-500 font-bold'>Using AI</span>
        </h1>
        <h2 className='w-full flex flex-col items-center text-xl '>Summarize your articles with this absolutely free & open source summarizer <br />
            transforms lengthy ones to clear and concise summaries.
        </h2>
        

      
    </header>
  )
}

export default Hero
