import React from 'react'
import img1 from '../assets/Screenshot 2023-10-21 111824.png'
import img2 from "../assets/icons8-share-26.png"
import img3 from "../assets/icons8-twitter-50.png"
import img4 from "../assets/icons8-docs-30.png"
import img5 from "../assets/icons8-download-30.png"

function Header() {
  return (
<>
<div className='bg-gray-200 w-screen h-screen flex items-end'>
  <div className='bg-white w-[85%] h-[96%] ml-24 '>

    <div className=' h-[7%] font-semibold border-b-2'>
      <ul className='flex gap-8 p-2'>
        <span className='flex-1'></span>
        <li>TAILWIND STRATER KIT</li>
        <span className='flex-1'></span>
        <img className='h-4 mt-1 ' src={img2} alt="" />
        <li>SHARE</li>
        <img className='h-4 mt-1 ' src={img3} alt="" />
        <li>TWIT</li>
        <img className='h-4 mt-1 ' src={img4} alt="" />
        <li>DOCS</li>
        <img className='h-4 mt-1 ' src={img5} alt="" />
        <li>DOWNLOAD</li>
        <span className='flex-1'></span>
      </ul>
    </div>

  <div className='flex'>
    <div className=' w-[50%]  p-12'>
      <h1 className='font-bold text-lg'>A beautiful extension for <br /> TAILWINDCSS.</h1><br />
      <p>Tailwind Starter Kit is Free and Open Source. It does not change or add any CSS to the already one from TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p><br />
      <button className='bg-rose-600 text-white px-3 py-1 rounded'>GET STARTED</button>
      <button className='bg-gray-900 text-white px-3 py-1 rounded ml-4'>GITHUB STAR</button>
    </div>

    <div >
      <img className='ml-[65%] -mt-1' src={img1} alt="" />
    </div>
    </div>

    <div className='flex justify-center'>
     <div className='border-2 w-[20%]'>
      <img className='h-24 w-[100%]' src="https://wallpaperswide.com/download/laptop-wallpaper-1920x1080.jpg" alt="" />
      <p className='font-bold h-11 bg-rose-700'>Great for your awesome project</p>
      <p className='bg-rose-700'>Yes, lots of large projects using it. It is compiled to regular CSS in the end, you can even read and review it yourself</p>
     </div>

     <div className='w-[20%] ml-24 bg-gray-200'>
      <p className='font-bold'>CSS components</p>
      <p>Tailwind starter kit comes with a huge number of fully coded CSS components</p><br /><br />
      <p className='font-bold'>Javascript components</p>
      <p>We also feature many dynamic components for React,Vue and Angular</p>
     </div>
     
     <div className='w-[20%] ml-12 bg-gray-200'>
      <p className='font-bold'>pages</p>
      <p>This extension also comes with J sample pages.They are fully coded so you can start working instantly</p><br />
      <p className='font-bold'>Documentation</p>
      <p>Built by developers for developers.you will have no</p>
    </div>
    </div>
    

      
     

  </div>
 
</div>

</>  )
}

export default Header
