import React from 'react';

const ButtonNav = ({ children }) => {
    return (
        <div>
            <button className=' border rounded-md transition duration-700 ease-in-out  hover:bg-[#FFFFFF] hover:text-[#163794] border-white uppercase text-white text-[20px] font-Arimo font-bold lg1:w-40 lg1:h-14 lg1:text-[15px] lg2:w-40 lg2:h-14 lg2:text-[15px] xl:w-40 xl:h-14 xl:text-[15px] xl1:w-40 xl1:h-14 xl1:text-[18px] w-[209px] h-[59px]'>{children}</button>
        </div>
    );
};

export default ButtonNav;