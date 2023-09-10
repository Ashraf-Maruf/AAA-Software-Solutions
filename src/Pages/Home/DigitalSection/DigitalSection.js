import React from 'react';
import Shape1 from '../../../Assets/Shape01.png'
import Shape2 from '../../../Assets/Shape02.png'
import ButtonTransformation from '../../../Component/ButtonTransformation';
const DigitalSection = () => {
    return (
        <div className=' py-28'>
            <div className=' relative max-w-[1550px] mx-auto 
                xm:px-4 
                xm1:px-4 
                xm2:px-4 
                xm3:px-4 
                xm4:px-4 
                sm:px-4 
                sm1:px-4
                md:px-4
                md1:px-4
                md2:px-4'>
                <img className=' 
                    absolute 
                    -top-16
                    left-0
                    xm:left-0 
                    xm:top-[100px]
                    xm1:left-0 
                    xm1:top-[100px]
                    xm2:left-0 
                    xm2:top-[100px]
                    xm3:left-0 
                    xm3:top-[100px]
                    xm4:left-0 
                    xm4:top-[100px]
                    sm:left-0 
                    sm:top-[100px]
                    sm1:left-0 
                    sm1:top-[100px]
                    md:left-0 
                    md:top-[100px]
                    md1:left-0 
                    md1:top-[100px]
                    md2:left-0 
                    md2:top-[100px]
                    lg:left-0 
                    lg:top-[-75px]
                    lg1:left-0 
                    lg1:top-[-45px]
                    xl:left-0 
                    xl:top-[-45px]
                    xl1:left-0 
                    xl1:top-[-45px]
                    ' src={Shape1} alt='img' />
                <img className=' 
                    absolute 
                    -top-8
                    right-0
                    xm:top-[-54px] 
                    xm:right-0
                    xm1:top-[-54px] 
                    xm1:right-0
                    xm2:top-[-54px] 
                    xm2:right-0
                    xm3:top-[-54px] 
                    xm3:right-0
                    xm4:top-[-54px] 
                    xm4:right-0
                    sm:top-[-54px] 
                    sm:right-0
                    sm1:top-[-54px] 
                    sm1:right-0
                    md:top-[-54px] 
                    md:right-0
                    md1:top-[-54px] 
                    md1:right-0
                    md2:top-[-54px] 
                    md2:right-0
                    lg:top-[-80px] 
                    lg:right-[35px]
                    lg1:top-[-80px] 
                    lg1:right-[35px]
                    xl:top-[-80px] 
                    xl:right-[35px]
                    xl1:top-[-80px] 
                    xl1:right-[35px]
                    ' src={Shape2} alt='img' />
                <div className="max-w-[1040px] mx-auto" data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine">
                    <h1 className=" 
                        font-Arimo 
                        xm:text-[25px] 
                        xm:leading-[40px] 
                        xm1:text-[27px] 
                        xm1:leading-[40px] 
                        xm2:text-[29px] 
                        xm2:leading-[40px] 
                        xm3:text-[34px] 
                        xm3:leading-[40px] 
                        xm4:text-[38px] 
                        xm4:leading-[48px] 
                        sm:text-[25px] 
                        sm:leading-[35px] 
                        sm1:text-[26px] 
                        sm1:leading-[35px]
                        md:text-[34px] 
                        md:leading-[60px]
                        md1:text-[36px] 
                        md1:leading-[60px]
                        md2:text-[42px] 
                        md2:leading-[60px]
                        lg:text-[45px] 
                        lg:leading-[60px]
                        text-[49px] 
                        leading-[63px] 
                        uppercase 
                        text-secondary 
                        font-bold">DRIVING YOUR DIGITAL TRANSFORMATION</h1>
                    <div className=' max-w-[978px] mx-auto md1:max-w-2xl md2:max-w-4xl lg:max-w-4xl'>
                        <p className=' pt-3 
                            xm:text-[16px] 
                            xm:text-justify 
                            xm1:text-[17px] 
                            xm1:text-justify 
                            xm2:text-[18px] 
                            xm2:text-justify 
                            xm3:text-[18px] 
                            xm3:text-justify 
                            xm4:text-[19px] 
                            xm4:text-justify 
                            sm:text-[17px] 
                            sm:text-justify 
                            sm1:text-[17px] 
                            sm1:text-justify 
                            md:text-[17px] 
                            md:text-justify 
                            md1:text-[20px] 
                            md1:text-justify 
                            font-Arimo 
                            font-normal 
                            text-[23px] 
                            normal-case 
                            text-secondary'>The world has been experiencing an immense rise in Technology for the last few years. It simply means that merely surviving is no more an option. So, it would be best if you had the assistance of AAA Software Solutions to establish a digitally improvised environment.</p>
                    </div>
                    <div className=' mt-11 xm:flex-col xm1:flex-col xm2:flex-col xm3:flex-col  xm4:flex-col sm:flex-col flex items-center justify-center gap-4'>
                        <ButtonTransformation>Who We Are?</ButtonTransformation>
                        <ButtonTransformation>Check Portfolio</ButtonTransformation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalSection;