import React from 'react';
import news1 from '../../../Assets/News01.png'
import news2 from '../../../Assets/News02.png'
import news3 from '../../../Assets/News03.png'
import shape from '../../../Assets/Shape04.png'
import { FaCalendarDays } from "react-icons/fa6";
const NewsSection = () => {
    const newsData = [
        {
            id: 1,
            img: news1,
            name: 'by restiy',
            data: 'April 11, 2021',
            title: "What's the Holding Back the lt Solution...",
            para: "We've been a strategy thought leader for nearly five decades and..."
        },
        {
            id: 2,
            img: news2,
            name: 'by restiy',
            data: 'April 11, 2021',
            title: "What's the Holding Back the lt Solution...",
            para: "We've been a strategy thought leader for nearly five decades and..."
        },
        {
            id: 3,
            img: news3,
            name: 'by restiy',
            data: 'April 11, 2021',
            title: "What's the Holding Back the lt Solution...",
            para: "We've been a strategy thought leader for nearly five decades and..."
        }
    ]
    const BoxShadow = {
        boxShadow: '0px 0px 24px 3px rgba(0, 0, 0, 6%)',
    };
    return (
        <div className=' bg-cover bg-center bg-no-repeat w-full h-[662px] xm:h-auto xm1:h-auto xm2:h-auto xm3:h-auto xm4:h-auto sm:h-auto sm1:h-auto md:h-auto md1:h-auto md2:h-auto sm1:pb-0 md:pb-10 md1:pb-20 md2:pb-20' style={{ backgroundImage: `url(${shape})` }}>
            <div className=' max-w-[1134px] mx-auto xm:pb-20 xm1:pb-10 xm2:pb-14 xm3:pb-20 xm4:pb-16 sm:pb-8 sm1:pb-20 md:pb-16'>
                <div className=' text-center pb-11 xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4'>
                    <p className=' xm:text-[18px] xm1:text-[18px] xm2:text-[18px] xm3:text-[18px] text-[26px] font-Arimo font-normal text-[#1E46B7]'>Recent Articles</p>
                    <h3 className=' xm:pt-3 xm:text-[28px] xm:leading-[45px] xm1:text-[32px] xm2:text-[33px] xm3:text-[38px] xm4:text-[38px] font-Arimo font-bold text-[49px] leading-[63px] capitalize '>Latest News from Us</h3>
                </div>
                <div className='grid xm:grid-cols-1 xm1:grid-cols-1 xm2:grid-cols-1 xm3:grid-cols-1 xm4:grid-cols-1 sm:grid-cols-1 sm1:grid-cols-2 md:grid-cols-2 md1:grid-cols-2 md2:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-5 xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4  lg:px-4 lg1:px-4 xm:gap-8 xm1:gap-2 xm2:gap-2 xm3:gap-6 xm4:gap-4 sm:gap-3 sm1:gap-3'>
                    {
                        newsData.map(news => <div key={news.id}>
                            <div className=' relative'>
                                <img data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-easing="ease-in-sine" className=' xm3:w-full xm4:w-full sm:w-full sm1:w-full md:w-full md1:w-full  md2:w-full sm1:pb-64 md:pb-48 md1:pb-56 md2:pb-56' src={news.img} alt='img' />
                                <div className='md:w-[92%] md1:w-[92%] md2:w-[94%] lg:w-[92%] sm1:w-[95%] sm:w-[95%] xm4:w-[95%] xm3:w-[95%] xm:top-40 xm:w-[95%] xm1:top-40 xm4:top-64 sm:top-80 sm1:top-40 xm1:w-[95%] absolute xm2:top-48 md:top-48 md1:top-56 md2:top-64 lg:top-44 top-52 text-start w-[327px] py-5 px-3 bg-white rounded-lg' data-aos="fade-left"
                                    data-aos-offset="200"
                                    data-aos-easing="ease-in-sine" style={BoxShadow}>
                                    <p className=' flex text-secondary font-medium items-center'>{news.name}<span className=' flex  items-center font-Arimo capitalize ms-3'><FaCalendarDays className=' mr-2' color='#1E46B7' size={18} />{news.data}</span></p>
                                    <h3 className=' mt-4 font-Arimo font-bold normal-case text-secondary text-[22px] leading-[30px]'>{news.title}</h3>
                                    <p className=' mt-5 pb-6 font-Arimo font-normal text-secondary leading-[25px] text-[18px] normal-case'>{news.para}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsSection;