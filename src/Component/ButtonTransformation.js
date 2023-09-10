import React from 'react';

const ButtonTransformation = ({ children }) => {
    return (
        <div>
            <button className=' capitalize border rounded-md transition duration-700 ease-in-out hover:text-white hover:bg-[#163794] border-[#163794] py-4 px-14 text-[#000000] font-Arimo font-medium text-[23px]'>{children}</button>
        </div>
    );
};

export default ButtonTransformation;