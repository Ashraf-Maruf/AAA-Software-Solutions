import React from 'react';
import Shape3 from '../../../Assets/Shape03.png'
const DigitalFutureSection = () => {
    return (
        <div className=' relative bg-cover bg-center bg-no-repeat pt-[100px] pb-56' style={{ backgroundImage: `url(${Shape3})` }}>
            <div className=' absolute bg-[#1E46B7] inset-0 opacity-60 ' ></div>
            <div className=' max-w-[1132px] mx-auto relative z-10 xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4'>
                <div className=' text-start text-white'>
                    <h3 className=' relative pb-8 font-Arimo font-bold xm:text-[45px] xm1:text-[45px] xm2:text-[50px] text-[63px] leading-[63px] capitalize'>What We Do<span className=' absolute inset-0 top-20 xm:w-60 xm1:w-60 xm2:w-64 w-[340px] bg-white h-[2px]'></span></h3>
                    <p className=' font-Arimo font-normal xm:text-[17px] text-[23px] normal-case'>Transforming your business processes for the digital future</p>
                </div>
            </div>
        </div>
    );
};

export default DigitalFutureSection;