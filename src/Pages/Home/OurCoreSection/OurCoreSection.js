import React, { useState } from 'react';
import OurCore from './OurCoreDataSection'
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import './OurCoreSection.css'
const OurCoreSection = () => {
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(OurCore)
    const filterItem = (categItem) => {
        const UpdateCategory = OurCore.filter((curElem) => {
            return curElem.category === categItem
        });
        setItems(UpdateCategory)
    }
    return (
        <div className=' py-[100px]'>
            <div className=' max-w-[710px] mx-auto xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4'>
                <div className=''>
                    <h3 className=' pb-1 xm:pb-4 xm1:pb-4 xm2:pb-4 xm3:pb-4 xm4:pb-4 sm:pb-4 sm1:pb-4 font-Arimo font-bold text-secondary xm:text-[21px] xm:leading-[35px] xm1:text-[23px] xm1:leading-[35px] xm2:text-[25px] xm2:leading-[35px] xm3:text-[28px] xm3:leading-[35px] xm4:text-[30px] xm4:leading-[35px] sm:text-[35px] sm:leading-[35px] sm1:text-[40px] sm1:leading-[35px] md:text-[40px] md:leading-[40px] text-[49px] leading-[63px] uppercase'>OUR CORE TECHNOLOGIES</h3>
                    <p className=' font-Arimo font-normal xm:text-center xm:text-[17px] xm1:text-center xm1:text-[17px] xm2:text-center xm2:text-[17px] xm3:text-center xm3:text-[17px] xm4:text-center xm4:text-[17px] sm:text-center sm:text-[17px] sm1:text-center sm1:text-[17px] md:text-center md:text-[17px] text-[23px] normal-case text-secondary xm:px-0 xm2:px-4 xm3:px-0 sm1:px-10 md:px-20'>AAA Software Solutions works under various modern technologies for effective, scalable, and future-proof custom software development.</p>
                </div>
            </div>
            <div className=' relative max-w-[995px] mx-auto'>
                <div className=' flex justify-center items-center'>
                    <ul className={`text-xl font-Arimo flex border-2 border-[#163794]  font-bold focus:outline-none text-secondary flex-col gap-8 px-2 bg-white justify-center w-72 h-[800px] absolute rounded-t-none rounded-box ${open ? ' top-[70px] transition duration-700 ease-in-out xm:translate-x-[0%] xm1:translate-x-[10%] xm2:translate-x-[10%] xm3:translate-x-[10%] xm4:translate-x-[10%] sm:translate-x-[10%] sm1:translate-x-[10%] md:translate-x-[10%] md1:translate-x-[10%] md2:translate-x-[10%]' : 'top-[-9999px]'}`}>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Backend')}>Backend</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Frontend</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Mobile</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Database</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>CMS</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Cloud</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Testing Tools</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>DevOps</Link>
                        <Link className='transition duration-700 ease-in-out rounded-tl-lg rounded-br-lg  hover:border-[#163794] hover:border-2 py-2 px-12' onClick={() => filterItem('Frontend')}>Full Stacks</Link>
                    </ul>
                    <div className=' hidden md2:block text-[#163794] text-5xl xm:py-4 xm1:py-4 xm2:py-4 xm3:py-4 xm4:py-4 sm:py-4 sm1:py-4 md:py-4 md1:py-4 md2:py-4' onClick={() => setOpen(!open)}>
                        {
                            open ? <HiOutlineXMark /> : <HiBars3CenterLeft />
                        }
                    </div>
                </div>

                <ul className='md2:hidden categoryMenu text-secondary text-[17px] leading-[63px] font-Arimo font-bold py-9 flex items-center justify-center gap-8'>
                    <Link onClick={() => filterItem('Backend')}>Backend</Link>
                    <Link onClick={() => filterItem('Frontend')}>Frontend</Link>
                    <Link onClick={() => filterItem('Frontend')}>Mobile</Link>
                    <Link onClick={() => filterItem('Frontend')}>Database</Link>
                    <Link onClick={() => filterItem('Frontend')}>CMS</Link>
                    <Link onClick={() => filterItem('Frontend')}>Cloud</Link>
                    <Link onClick={() => filterItem('Frontend')}>Testing Tools</Link>
                    <Link onClick={() => filterItem('Frontend')}>DevOps</Link>
                    <Link onClick={() => filterItem('Frontend')}>Full Stacks</Link>
                </ul>
            </div>
            <div className=' max-w-[1132px] mx-auto xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 px-4'>
                <div className=' grid xm:grid-cols-1 xm1:grid-cols-1 xm2:grid-cols-1 xm3:grid-cols-2 xm4:grid-cols-2 
                sm:grid-cols-3 sm1:grid-cols-3 md:grid-cols-3 md1:grid-cols-4 md2:grid-cols-5 lg:grid-cols-5  md2:gap-1 grid-cols-6 gap-5'>
                    {
                        items.map((item) => {
                            const { id, img, name } = item;
                            return (
                                <div className=" flex justify-center items-center" key={id}>
                                    <div>
                                        <div className="bg-[#E8EDF8] hover:scale-110 transition duration-700 ease-in-out  xm:w-[275px] xm1:w-80 xm2:w-80 xm3:w-44 xm4:w-52  sm:w-40 sm1:w-44 md:w-48 flex justify-center items-center w-[161px] h-[121px]">
                                            <figure>
                                                <img src={img} alt='img' />
                                            </figure>
                                        </div>
                                        <h2 className=' text-secondary text-[17px] font-Arimo font-medium leading-[63px] capitalize'>{name}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default OurCoreSection;