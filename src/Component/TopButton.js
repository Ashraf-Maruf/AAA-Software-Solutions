import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiArrowSmallUp } from "react-icons/hi2";
const TopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 3500) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const boxShadow = {
        boxShadow: '0px 3px 8px 0px #FFFFFF',
    }
    return (
        <div className=' max-w-[1132px] mx-auto'>
            {
                backToTopButton && (
                    <button className='fixed  z-30 bottom-[570px] xm2:hidden lg:flex right-12 bg-[#163794]  rounded-md flex items-center justify-center w-12 h-12 transition duration-700 ease-in-out  rotate-180 hover:rotate-0' onClick={scrollUP}><HiArrowSmallUp className='animate-bounce rounded-full' color='#FFFFFF' size={20} style={boxShadow} /></button>
                )
            }
        </div>
    );
};

export default TopButton;