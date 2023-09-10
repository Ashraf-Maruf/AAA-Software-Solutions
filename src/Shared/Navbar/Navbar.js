import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'
import './Navbar.css'
import ButtonNav from '../../Component/ButtonNav';
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [fix, setFix] = useState(false);

    const setFixed = () => {
        if (window.scrollY >= 392) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div className={` w-full top-[-1px] z-20 ${fix ? 'navbar1 fixed' : 'navbar1'}`}>
            <div className='border  relative z-[2] border-[rgb(255,255,255,0.2)] border-s-0 border-r-0'>
                <div className=" 
                navbar 
                py-2 
                px-4 
                max-w-[90%] 
                2xl:max-w-[90%] 
                xl:max-w-[96%]
                lg1:max-w-[95%]
                lg:max-w-[100%] 
                md2:max-w-[100%] 
                md2:px-4 
                xm:max-w-xs 
                xm2:max-w-sm 
                mx-auto">
                    <div className='flex-1'>
                        <img src={Logo} className=' xm:w-28 xm2:w-28 lg1:w-32' width={192} height={80} alt='Logo' />
                    </div>
                    <div className=' md1:hidden'>
                        <ul className='desktopMenu flex items-center uppercase text-xl lg1:text-sm font-Arimo font-bold  '>
                            <Link className='text-white'>Home</Link>
                            <Link className=' text-white'>About</Link>
                            <Link className=' text-white'>Cases</Link>
                            <Link className=' text-white'>IT Support</Link>
                            <Link className=' text-white'>Hosting</Link>
                            <Link className=' text-white'>Contact</Link>
                            <ButtonNav>Contact Us</ButtonNav>
                        </ul>
                    </div>
                    <div className=' hidden md1:block items-end justify-end text-white text-5xl' onClick={() => setOpen(!open)}>
                        {
                            open ? <HiOutlineXMark /> : <HiBars3CenterLeft />
                        }
                    </div>
                    <ul className={`text-xl font-Arimo   font-bold focus:outline-none text-white flex-col gap-8  bg-[#163794] justify-center xm:w-60 w-80 h-[550px] absolute rounded-t-none rounded-box ${open ? 'md1:top-[-115px] md2:top-[-115px] md:top-[-25px] lg:top-[-80px] xm:top-[-25px] top-[-25px] xm:translate-x-[-2%] translate-x-[-5%] transition duration-700 ease-in-out rotate-[-9deg] xm:rotate-[-9deg]' : 'top-[-9999px]'}`}>
                        <li><Link className=' transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12 '>Home</Link></li>
                        <li><Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12'>About</Link></li>
                        <li><Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12'>Cases</Link></li>
                        <li><Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12'>IT Support</Link></li>
                        <li><Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12'>Hosting</Link></li>
                        <li><Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg hover:text-black hover:border-2 py-4 px-12'>Contact</Link></li>
                        <div className=' pt-3'>
                            <ButtonNav>Contact Us</ButtonNav>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;