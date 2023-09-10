import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=' bg-[#0D1B3F]'>
            <footer className=" max-w-[94.8125rem] mx-auto">
                <div className='footer flex justify-between xl:flex-row xl:flex-wrap md:flex-wrap w-10/12 mx-auto pt-40 text-white'>
                    <div className=' mb-9'>
                        <span className="footer-title font-Arimo font-medium text-[24px] leading-[63px] capitalize w-full opacity-100 relative text-start shape">Company</span>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Why AAA software solutions?</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Careers</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Products</Link>
                        <Link className="link link-hover text-[#EAF0FF]  pb-3 font-Arimo font-normal text-[19px]">Blog</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Make Payment</Link>
                        <Link className="link link-hover text-[#EAF0FF] font-Arimo font-normal text-[19px]">Press Release</Link>
                    </div>
                    <div className=' mb-9'>
                        <span className="footer-title font-Arimo font-medium text-[24px] leading-[63px] capitalize w-full opacity-100 relative text-start shape">Services</span>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Web Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Mobile App Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Web & Graphic Designing</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Search Engine Optimization</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Desktop App Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] font-Arimo font-normal text-[19px]">Digital Marketing</Link>
                    </div>
                    <div className=' mb-9'>
                        <span className="footer-title font-Arimo font-medium text-[24px] leading-[63px] capitalize w-full opacity-100 relative text-start shape">Hire Dedicated Resources</span>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Web Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Mobile App Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Web & Graphic Designing</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Search Engine Optimization</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Desktop App Development</Link>
                        <Link className="link link-hover text-[#EAF0FF] font-Arimo font-normal text-[19px]">Digital Marketing</Link>
                    </div>
                    <div className=' mb-9'>
                        <span className="footer-title font-Arimo font-medium text-[24px] leading-[63px] capitalize w-full opacity-100 relative text-start shape">Contact</span>
                        <Link className="link link-hover pb-3 text-[#EAF0FF] font-Arimo font-normal text-[19px]">info@aaasoftwaresolutions.com</Link>
                        <Link className="link link-hover pb-3 text-[#EAF0FF] font-Arimo font-normal text-[19px]">+1 111 222 3333</Link>
                        <Link className="link link-hover text-[#EAF0FF] pb-3 font-Arimo font-normal text-[19px]">Web & Graphic Designing</Link>
                        <button className=' uppercase text-[#C6D2F1] font-Arimo font-medium text-[20px] border border-[#C6D2F1] py-5 px-4 hover:bg-[#ffffff]  hover:text-[#000000]'>Contact us</button>
                    </div>
                </div>
            </footer>

            <footer className=" py-4 border-t bg-[#0D1B3F] pb-10 text-base-content border-opacity-20 border-[#6788E2]">
                <div className=' max-w-[94.8125rem] mx-auto'>
                    <div className='footer flex justify-between xl:flex-row xl:flex-wrap md:flex-wrap   w-10/12 mx-auto'>
                        <div className="items-center text-start text-[#C6D2F1] grid-flow-col">
                            <p className=' font-Arimo font-normal text-[15px] leading-[22px]'>Copyrighr 2023 AAA Software Solutions<br /> All Rights Reserved</p>
                        </div>
                        <div className="grid grid-flow-col gap-4">
                            <Link className=' border w-[42px] h-[42px] flex justify-center items-center rounded-full text-[#C6D2F1] text-2xl '><FaFacebookF /></Link>
                            <Link className=' border w-[42px] h-[42px] flex justify-center items-center rounded-full text-[#C6D2F1] text-2xl'><FaTwitter /></Link>
                            <Link className=' border w-[42px] h-[42px] flex justify-center items-center rounded-full text-[#C6D2F1] text-2xl'><FaLinkedinIn /></Link>
                            <Link className=' border w-[42px] h-[42px] flex justify-center items-center rounded-full text-[#C6D2F1] text-2xl'><IoLogoInstagram /></Link>
                        </div>
                        <div className="items-center text-start text-[#C6D2F1] grid-flow-col">
                            <p className=' font-Arimo font-normal text-[15px] leading-[22px]'>Privacy Policy Terms & Conditions<br />Quality Management Policy SMS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;