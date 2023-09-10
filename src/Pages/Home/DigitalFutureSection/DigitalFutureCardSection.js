import React from 'react';
import { HiArrowSmallRight } from "react-icons/hi2";
const DigitalFutureCardSection = ({ future }) => {
    const { img, name, para } = future;
    const BoxShadow = {
        boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 15%)',
    };
    return (
        <div className="card items-start bg-base-100 rounded-md" style={BoxShadow}>
            <figure className="ps-7 pt-4" data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine">
                <img className='w-[100px] h-[90px]' src={img} alt="Shoes" />
            </figure>
            <div className="card-body ps-7 pb-6 pr-4 text-start" data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine">
                <h2 className=" font-Arimo font-bold capitalize text-[19px] leading-[25px] text-secondary">{name}</h2>
                <p className=' font-Arimo font-normal normal-case text-secondary text-[19px] leading-[25px]'>{para}</p>
                <div className="card-actions pt-2">
                    <button className=" rounded-full flex justify-center items-center w-[30px] h-[30px] text-[22px] text-[#1E46B7] bg-[#E6EEF6]"><HiArrowSmallRight /></button>
                </div>
            </div>
        </div>
    );
};

export default DigitalFutureCardSection;