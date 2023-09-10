import React from 'react';
import Icon1 from '../../../Assets/Icon/Icon/Group 8.png'
import Icon2 from '../../../Assets/Icon/Icon/Layer_1.png'
const SuitableSection = () => {
    const SuitableData = [
        {
            id: 1,
            Img: Icon1,
            name: "Dedicated hiring",
            para: 'The world has been experiencing an immense rise in Technology for the last few years. It simply means that merely surviving is no more an option. So, it would be best if you had the assistance of AAA Software Solutions to establish a digitally improvised environment.',
            button: 'Contact with Expert',
        },
        {
            id: 2,
            Img: Icon2,
            name: "Fixed Cost",
            para: 'The world has been experiencing an immense rise in Technology for the last few years. It simply means that merely surviving is no more an option. So, it would be best if you had the assistance of AAA Software Solutions to establish a digitally improvised environment.',
            button: 'Get a Quote',
        }
    ]
    return (
        <div>
            <div className=' max-w-[1139px] mx-auto mb-[117px]'>
                <div className='max-w-[1055px] mx-auto xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4'>
                    <h3 className=' xm:text-[28px] xm:leading-[35px] xm1:text-[32px] xm1:leading-[45px] xm2:text-[32px] xm2:leading-[45px] xm3:text-[32px] xm3:leading-[45px] xm4:text-[36px] xm4:leading-[45px] font-Arimo font-bold text-secondary text-[49px] leading-[63px] normal-case'>Choose the Best Suitable Engagement Model</h3>
                    <p className=' xm:text-[16px]  xm1:text-[19px] xm2:text-[19px] xm2:mt-5 xm3:text-[19px] xm3:mt-5 xm:mt-5 xm4:mt-5 sm:mt-5 sm1:mt-5 xm1:mt-5 mb-10 font-Arimo font-normal text-[23px] normal-case text-secondary'>Based on your business specifications and project requirements</p>
                </div>
                <div className=' grid xm:grid-cols-1 xm1:grid-cols-1 xm2:grid-cols-1 xm3:grid-cols-1 xm4:grid-cols-1 sm:grid-cols-1 sm1:grid-cols-1 grid-cols-2 gap-5 xm:px-4 xm1:px-4 xm2:px-4 xm3:px-4 xm4:px-4 sm:px-4 sm1:px-4 md:px-4 md1:px-4 md2:px-4 lg:px-4 lg1:px-4' >
                    {
                        SuitableData.map(suitable => <div className="card rounded-xl bg-[#163794] shadow-xl" key={suitable.id}>
                            <div className="card-body text-white" data-aos="fade-up"
                                data-aos-easing="ease-in-cubic"
                                data-aos-duration="4000">
                                <div className='mb-4 rounded-lg flex justify-center items-center bg-white w-[105px] h-[105px]'>
                                    <img className='' src={suitable.Img} alt='' />
                                </div>
                                <h2 className=" xm:text-[28px] xm1:text-[28px] pb-3 text-start font-Arimo font-bold text-[36px] leading-[63px] capitalize">{suitable.name}</h2>
                                <p className=' font-Arimo font-normal text-[19px] normal-case text-start'>{suitable.para}</p>
                                <div className="card-actions justify-start pt-10">
                                    <button className='transition duration-700 ease-in-out rounded-md hover:text-[#163794]  hover:bg-white font-Arimo font-bold text-[20px] border border-white py-4 px-4'>{suitable.button}</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SuitableSection;