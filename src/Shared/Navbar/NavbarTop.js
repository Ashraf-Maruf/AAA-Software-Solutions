import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiMiniEnvelope } from "react-icons/hi2";
import { FaSkype, FaWhatsapp, FaClock } from "react-icons/fa6";
const NavbarTop = () => {
    return (
        <div className='relative z-[2] bg-[rgb(13,27,63,0.6)]  '>
            <div className=' 
                    max-w-[90%] 
                    2xl:max-w-[90%]
                    xl:max-w-[96%]
                    lg1:max-w-[95%]
                    lg:max-w-[100%]
                    md2:max-w-[100%]                    
                    mx-auto'>
                <div className=' px-4 py-3 flex justify-between items-center'>
                    <div className='flex gap-20 md2:flex-col md2:gap-2 text-white'>
                        <span className='font-Arimo font-normal text-[18px]'>Call Us: <a className='font-Arimo font-normal text-[18px]  text-white' href="tel:+548978478">548978478</a></span>
                        <span className=' font-Arimo font-normal text-[18px]'>Email us: <Link className=' font-Arimo font-normal text-[18px]' onClick={() => window.location = 'mailto:demo@example.com'}>demo@example.com</Link></span>
                    </div>
                    <div className='flex gap-20 md2:flex-col md2:gap-2 justify-center items-center text-white'>
                        <div>
                            <h1 className='font-Arimo font-normal text-[18px] flex justify-center items-center gap-2'><span className='text-[18px]'><FaClock /></span>08:00 am - 6:00 pm</h1>
                        </div>
                        <div className=' relative z-10 flex gap-5'>
                            <span className='border-[1px] p-2 text-white rounded-2xl'><Link><HiOutlinePhone /></Link></span>
                            <span className='border-[1px] p-2 text-white rounded-2xl'><Link><HiMiniEnvelope /></Link></span>
                            <span className='border-[1px] p-2 text-white rounded-2xl'><Link><FaWhatsapp /></Link></span>
                            <span className='border-[1px] p-2 text-white rounded-2xl '><Link><FaSkype /></Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;