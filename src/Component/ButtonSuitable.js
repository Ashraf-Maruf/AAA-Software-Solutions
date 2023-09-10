import React from 'react';

const ButtonSuitable = ({ children }) => {
    return (
        <div>
            <button className=' normal-case rounded-md transition duration-700 ease-in-out hover:bg-white hover:text-[#163794] border py-4 px-8 text-white text-[20px] font-Arimo font-bold'>{children}</button>
        </div>
    );
};

export default ButtonSuitable;