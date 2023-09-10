import React from 'react';

const TalkSection = () => {
    return (
        <div className=' bg-accent pt-[124px] pb-[155px] xm1:pb-[200px] xm2:pb-[200px] xm3:pb-[200px] xm4:pb-[230px]'>
            <div className=' max-w-[717px] mx-auto'>
                <div className=' text-white xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4'>
                    <p className='xm:text-[24px] xm1:text-[24px] pb-4 font-Arimo font-normal text-[29px] leading-normal normal-case'>Contact us to discuss your ideas and concept</p>
                    <h3 className=' xm:text-[37px] xm1:text-[37px] xm2:text-[45px] xm2:leading-[55px] xm:leading-[45px] xm1:leading-[45px] pb-12 font-Arimo font-bold capitalize text-[51px] leading-[63px]'>Let’s Talk About Your Project.</h3>
                    <span className='relative'>
                        <input type="text" placeholder="Enter email" className=" py-4 ps-4 xm:pr-6 xm1:pr-6 xm2:pr-6 pr-[213px] placeholder:text-[27px] placeholder:font-Arimo placeholder:font-normal placeholder:text-white text-[27px] text-white rounded-md focus:outline-none bg-transparent border border-white w-full max-w-4xl" />
                        <button className=' font-Arimo font-medium text-[34px] leading-[63px] xm:top-20 xm:left-0 xm:right-0 xm1:top-20 xm1:left-0 xm1:right-0 xm2:top-20 xm2:left-0 xm2:right-0 xm3:top-20 xm3:left-0 xm3:right-0 xm4:top-20 xm4:left-0 xm4:right-0 absolute top-[-25px] right-2 text-[#163895] py-0 px-10 rounded-md bg-white'>Submit</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TalkSection;