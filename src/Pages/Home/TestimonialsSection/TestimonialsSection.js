import React from 'react';
import { FaStar } from "react-icons/fa6";
const TestimonialsSection = () => {
    const testimonialsData = [
        {
            id: 1,
            para: 'It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.',
            name: "-LynxCon"
        },
        {
            id: 2,
            para: 'It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.',
            name: "-LynxCon"
        },
        {
            id: 3,
            para: 'It was very pleasant to work with them, they surpassed by far the expectations resulting in a high quality project. I know that they have the ability to comply with any type of software, so I do not hesitate to recommend them.',
            name: "-LynxCon"
        },
    ]
    const BoxShadow = {
        boxShadow: '4px 4px 11px -6px rgba(0, 0, 0, 20%)',
    };
    return (
        <div className=' pb-[150px] xm:pb-28 xm1:pb-28 xm2:pb-28 xm3:pb-28 xm4:pb-28 sm:pb-28 sm1:pb-28 md:pb-28 md1:pb-28'>
            <div className=' max-w-[1130px] mx-auto xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4' >
                <div className=' mt-[104px] mb-[120px] xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4'>
                    <h3 className=' xm:text-[34px] xm1:text-[36px] xm2:text-[40px] text-secondary text-[49px] leading-[63px] font-Arimo font-bold uppercase'>Testimonials</h3>
                    <p className=' text-[26px] leading-normal normal-case font-Arimo font-normal text-[#1E46B7]'>Client love with us.</p>
                </div>
                <div className=' grid xm:grid-cols-1 xm1:grid-cols-1 xm2:grid-cols-1 xm3:grid-cols-1 xm4:grid-cols-1 sm:grid-cols-1 sm1:grid-cols-2 md:grid-cols-2 md1:grid-cols-2 lg:grid-cols-3  xm:gap-4 xm1:gap-2 xm2:gap-2 xm3:gap-2 xm4:gap-2 sm:gap-0 sm1:gap-3  md:gap-2 md1:gap-2 grid-cols-3 gap-2'>
                    {
                        testimonialsData.map(testimonials => <div className=" sm1:mb-14 md:mb-10 md1:mb-10 card hover:cursor-pointer hover:scale-y-125 transition duration-700 ease-in-out rounded-none bg-base-100 shadow-xl" key={testimonials.id} style={BoxShadow}>
                            <div className="card-body" data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-easing="ease-in-sine">
                                <div className=' flex justify-center pb-4 gap-1'>
                                    <FaStar color='#1E46B7' size={20} />
                                    <FaStar color='#1E46B7' size={20} />
                                    <FaStar color='#1E46B7' size={20} />
                                    <FaStar color='#1E46B7' size={20} />
                                    <FaStar color='#1E46B7' size={20} />
                                </div>
                                <p className=' text-secondary font-Arimo font-normal text-[18px] normal-case text-start'>{testimonials.para}</p>
                                <h4 className=' text-secondary font-Arimo font-bold text-[20px] pt-4 leading-[30px] '>{testimonials.name}</h4>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;