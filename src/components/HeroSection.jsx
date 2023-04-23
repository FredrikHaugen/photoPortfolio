import React from 'react'
import Images from "../image_links.json"

function HeroSection() {
    return (
        <div id='HeroSection' className="h-screen bg-soft-pink flex justify-center items-center overflow-auto">
            <div className='z-10 absolute'>
                <h1 className='text-[6rem] text-slate-500 drop-shadow-l font-sans'>Your Name</h1>
            </div>
            <img src={Images.PortfolioImage} width={600} alt="Unsplash" loading="lazy" className=' drop-shadow-2xl'/>
        </div>
    )
}

export default HeroSection