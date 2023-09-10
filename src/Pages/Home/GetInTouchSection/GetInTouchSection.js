import React, { useState } from 'react';
import Img from '../../../Assets/Get touch.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './GetInTouchSection.css'
import { Link } from 'react-router-dom';
import { FaUserLarge, FaPhone, FaEnvelope, FaLocationDot, FaPencil, FaClock } from "react-icons/fa6";
const GetInTouchSection = () => {
    const [value, setValue] = useState()
    const BoxShadow = {
        boxShadow: '0px 4px 11px 4px rgba(0, 0, 0, 10%)',
    };
    return (
        <div className=' relative z-10 xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4'>
            <div className=' max-w-[1130px] xm:h-auto mx-auto  rounded-md bg-white' style={BoxShadow}>
                <div className=' flex justify-between sm1:flex-col md2:flex-col lg:flex-col lg1:px-6 lg1:py-6 xm:px-4 xm:py-4 md:px-4 md:py-6 sm1:px-8 px-12 py-12'>
                    <div className=' w-[654px] sm1:w-full md2:mx-auto lg:mx-auto box-border text-start'>
                        <h3 className=' pb-9 font-Arimo font-bold text-[#5C5C5C] text-[38px] leading-[63px] capitalize'>Get In Touch</h3>
                        <div className=' flex sm1:flex-col gap-5'>
                            <span className=' relative w-full'>
                                <input type="text" placeholder="Your Name" className="h-[67px] px-4 pr-12 focus:outline-none border placeholder:text-[#202020] placeholder:text-[16px] placeholder:font-Arimo placeholder:font-normal placeholder:leading-[18px] border-[#D9D9D9] rounded-[4px] input-bordered w-full" />
                                <span className='absolute top-5 right-[21px]'><FaUserLarge color='#1E46B7' size={20} /></span>
                            </span>
                            <span className='relative w-full'>
                                <input type="text" placeholder="Your Email" className="h-[67px] px-4 pr-12 focus:outline-none border placeholder:text-[#202020] placeholder:text-[16px] placeholder:font-Arimo placeholder:font-normal placeholder:leading-[18px] border-[#D9D9D9] rounded-[4px] input-bordered w-full" />
                                <span className='absolute top-5 right-[21px]'><FaEnvelope color='#1E46B7' size={20} /></span>
                            </span>

                        </div>
                        <div className=' pt-5 pb-5 flex sm1:flex-col gap-5'>
                            <span className=' relative'>
                                <PhoneInput
                                    country={'us'}
                                    placeholder='201-123-1234'
                                    value={value}
                                    onChange={setValue}

                                />
                                <span className='absolute top-5 right-[21px]'><FaPhone color='#1E46B7' size={20} /></span>
                            </span>
                            <span className=' relative w-full'>
                                <input type="text" placeholder="Your Location" className="h-[67px] px-4 pr-12 focus:outline-none border placeholder:text-[#202020] placeholder:text-[16px] placeholder:font-Arimo placeholder:font-normal placeholder:leading-[18px] border-[#D9D9D9] rounded-[4px] input-bordered w-full" />
                                <span className=' absolute top-5 right-[21px]'><FaLocationDot color='#1E46B7' size={20} /></span>
                            </span>
                        </div>
                        <span className=' relative'>
                            <textarea rows={7} placeholder='Let us Know what you need.' className=" py-5  px-4 pr-12 focus:outline-none border placeholder:text-[#202020] placeholder:text-[16px] placeholder:font-Arimo placeholder:font-normal placeholder:leading-[18px] border-[#D9D9D9] rounded-[4px] input-bordered w-full resize-none"></textarea>
                            <span className='absolute top-[-168px] right-[21px]'><FaPencil color='#1E46B7' size={20} /></span>
                        </span>
                        <div className=' pt-9'>
                            <button className="bg-[#163794] border border-[#6788E2] text-white py-4 px-14 font-Arimo  font-normal text-[16px] leading-normal uppercase">Submite</button>
                        </div>
                        {/* <div className='pb-6 flex justify-between md2:flex-col lg:flex-col md2:gap-6 lg:gap-6'>
                            <div className=' relative'>
                                <PhoneInput
                                    country={'us'}
                                    placeholder='201-123-1234'
                                    value={value}
                                    onChange={setValue} />
                                <span className=' absolute right-4 top-5'><FaPhone size={20} color='#1E46B7' /> </span>
                            </div>
                            <div className=' relative'>
                                <input type="text" placeholder="Your Location" className="" />
                                <span className=' absolute right-4 top-5'><FaLocationDot size={20} color='#1E46B7' /> </span>
                            </div>
                        </div> */}
                        {/* <span className=' relative'>
                            <textarea rows={5} className=""></textarea>
                            <span className=' absolute right-4 top-[-125px]'><FaPencil size={20} color='#1E46B7' /> </span>
                        </span>
                        <div className=' pt-9'>
                            <button className="bg-[#163794] border border-[#6788E2] text-white py-4 px-14 font-Arimo  font-normal text-[16px] leading-normal uppercase">Submite</button>
                        </div> */}
                    </div>
                    <div className='max-w-[335px] md2:mx-auto lg:mx-auto'>
                        <div className='relative xm:mt-5 xm1:mt-10 xm2:mt-12 xm3:mt-16 xm4:mt-16 sm:mt-16 sm1:mt-16 md:mt-16 md1:mt-16'>
                            <div className=' absolute inset-0 top-0 xm:w-full xm1:w-full xm2:w-full xm3:w-[95%] xm4:w-[82%] sm:w-[100%] sm1:w-[100%] md:w-[100%] xm:h-full xm1:h-full xm2:h-full xm3:h-full xm4:h-full sm:h-full sm1:h-full md:h-[100%] md1:w-[100%] md1:h-full md2:h-full lg:h-full' style={{ backgroundImage: `linear-gradient(to bottom, rgba(32, 72, 184, 75%), rgba(32, 72, 184, 100%))`, }} >
                                <div className=' xm:py-8 xm:px-4 xm1:px-5 xm1:py-10 xm2:py-10 xm2:px-8 xm3:py-8 xm3:px-6 sm:py-7 md:px-5 py-14 ps-8'>
                                    <h3 className=' xm:pb-5 xm4:pb-4 xm:text-[27px] xm:leading-[35px] xm1:pb-10 xm1:text-[27px] xm2:text-[30px] xm2:leading-[35px]  xm1:leading-[35px] pb-11 text-start text-white text-[34px] leading-[44px] font-Arimo font-bold normal-case'>Don’t hesitate to contact us</h3>
                                    <div className=' xm:pb-3 xm1:pb-2 pb-9 text-white flex items-center gap-5'>
                                        <span className=' bg-[#5378C9] rounded-full w-[45px] h-[45px] flex justify-center items-center'>
                                            <FaPhone size={20} color='#FFFFFF' />
                                        </span>
                                        {/* <span><FaPhone size={20} color='#FFFFFF' /></span> */}
                                        <div className=' text-justify'>
                                            <p className=' font-Arimo font-normal leading-normal xm:text-[16px] xm1:text-[18px] md:text-[18px] text-[20px] capitalize'>Call Us</p>
                                            <Link className=' font-Arimo font-bold xm:text-[16px] xm1:text-[17px]] xm2:text-[18px] xm3:text-[19px] xm4:text-[18px] md:text-[20px] text-[22px] leading-[40px] normal-case'>+012-345-6789</Link>
                                        </div>
                                    </div>
                                    <div className=' xm:pb-3 xm1:pb-2 pb-9 text-white flex items-center gap-5'>
                                        <span className=' bg-[#5378C9] rounded-full w-[45px] h-[45px] flex justify-center items-center'><FaEnvelope size={20} color='#FFFFFF' /></span>
                                        <div className=' text-justify'>
                                            <p className=' font-Arimo font-normal xm:text-[16px] xm1:text-[18px] md:text-[18px] leading-normal text-[20px] capitalize'>Write to us</p>
                                            <Link className=' font-Arimo font-bold  xm:text-[16px]  xm1:text-[17px] xm2:text-[18px] xm3:text-[19px] xm4:text-[18px] md:text-[20px] text-[22px] leading-[40px] normal-case'>info@example.com</Link>
                                        </div>
                                    </div>
                                    <div className=' text-white flex items-center gap-5'>
                                        <span className=' bg-[#5378C9] rounded-full w-[45px] h-[45px] flex justify-center items-center'><FaClock size={20} color='#FFFFFF' /></span>
                                        <div className=' text-justify'>
                                            <p className=' font-Arimo font-normal xm:text-[16px] xm1:text-[16px] md:text-[18px] leading-normal text-[20px] capitalize'>Office hours</p>
                                            <p className=' font-Arimo font-bold xm:text-[15px] xm1:text-[17px] xm2:text-[18px] xm3:text-[19px] xm4:text-[18px] md:text-[20px] text-[22px] leading-[40px] normal-case'>Mon-Sat 9:00 - 7:00</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <img className='xm:w-full xm1:w-full xm2:w-full xm3:w-[95%] xm4:w-[82%] sm:w-[100%] sm1:w-[100%] md:w-[100%] md1:w-[100%] md2:w-[100%] lg:w-full lg1:w-full' src={Img} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default GetInTouchSection;