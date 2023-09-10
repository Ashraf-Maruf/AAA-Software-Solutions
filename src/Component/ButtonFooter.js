import React from 'react';

const ButtonFooter = ({ children }) => {
    return (
        <div>
            <button className=' border py-3 px-6 border-[#C6D2F1] text-[#C6D2F1] font-Arimo font-medium capitalize text-[20px]'>{children}</button>
        </div>
    );
};

export default ButtonFooter;