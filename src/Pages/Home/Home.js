import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import NavbarTop from '../../Shared/Navbar/NavbarTop'
import HeroImg from '../../Assets/Hero-Background.gif'
import './Home.css'
import DigitalSection from './DigitalSection/DigitalSection';
import DigitalFutureSection from './DigitalFutureSection/DigitalFutureSection';
import DigitalFutureDataSection from './DigitalFutureSection/DigitalFutureDataSection';
import OurCoreSection from './OurCoreSection/OurCoreSection';
import SuitableSection from './SuitableSection/SuitableSection';
import NewsSection from './NewsSection/NewsSection';
import TalkSection from './TalkSection/TalkSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';
import GetInTouchSection from './GetInTouchSection/GetInTouchSection';
import Footer from '../../Shared/Footer/Footer';
import TopButton from '../../Component/TopButton';
const Home = () => {
    return (
        <div>
            <div className="hero relative h-screen xm:h-screen " style={{ backgroundImage: `url(${HeroImg})` }}>
                <div className=' absolute inset-0 opacity-60 bg-[#051D62] top-0 left-0 w-full'></div>
                <div className=' absolute top-0 w-full'>
                    <div className='
                    xm:hidden 
                    xm1:hidden 
                    xm2:hidden 
                    xm3:hidden 
                    xm4:hidden 
                    sm:hidden 
                    sm1:hidden
                    block'>
                        <NavbarTop></NavbarTop>
                    </div>
                    <Navbar></Navbar>
                </div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-[858px] mx-auto">
                        <h1 className=" 
                            pb-3 
                            font-DaysOne 
                            font-normal 
                            text-[60px] 
                            leading-[68px] 
                            uppercase
                            xm:text-[20px]
                            xm:leading-[35px]
                            xm1:text-[22px]
                            xm1:leading-[35px]
                            xm2:text-[24px]
                            xm2:leading-[35px]
                            xm3:text-[26px]
                            xm3:leading-[35px]
                            xm4:text-[30px]
                            xm4:leading-[45px]
                            sm:text-[36px]
                            sm:leading-[50px]
                            sm1:text-[36px]
                            sm1:leading-[50px]
                            md:text-[43px]
                            md:leading-[60px]
                            ">WE BUILD & REFINE SMART WEB SOLUTIONS</h1>
                        <p className=" 
                            font-Arimo 
                            font-normal 
                            text-[30px] 
                            xm:text-[16px]
                            xm:leading-[25px]
                            xm1:text-[16px]
                            xm1:leading-[25px]
                            xm2:text-[17px]
                            xm2:leading-[25px]
                            xm3:text-[17px]
                            xm3:leading-[25px]
                            xm4:text-[17px]
                            xm4:leading-[25px]
                            sm:text-[20px]
                            sm:leading-[25px]
                            sm1:text-[22px]
                            sm1:leading-[28px]
                            md:text-[24px]
                            md:leading-[35px]
                            md1:text-[30px]
                            md1:leading-[40px]
                            normal-case 
                            leading-[40px]
                            px-10
                            xm:px-0
                            xm1:px-0
                            xm2:px-0
                            xm3:px-0
                            xm4:px-0
                            sm:px-0
                            md:px-0
                            md1:px-10">We deliver best-in-class web design, development & marketing services with Zen approach.</p>
                    </div>
                </div>
            </div>
            <DigitalSection></DigitalSection>
            <DigitalFutureSection></DigitalFutureSection>
            <DigitalFutureDataSection></DigitalFutureDataSection>
            <OurCoreSection></OurCoreSection>
            <SuitableSection></SuitableSection>
            <NewsSection></NewsSection>
            <TalkSection></TalkSection>
            <TestimonialsSection></TestimonialsSection>
            <GetInTouchSection></GetInTouchSection>
            <TopButton></TopButton>
            <div className=' -mt-20' >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;