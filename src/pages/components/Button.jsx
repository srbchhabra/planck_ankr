
import React, { useContext } from "react";

const Button = ({ customClass, disabled, type, icon, label, ...rest }) => {


    

    return (
        <>
            <button
                type={type}
                {...rest}
                className={`${customClass} ${disabled ? " bg-[#374151] opacity-40 pointer-events-none " : " bg-[#374151] "} flex items-center gap-2 text-white text-lg font-medium hover:bg-gray-500  ml-1  rounded-[10px] px-5 py-2.5   `}
            >
                {icon}
                {label}
            </button>
        </>
    );
};

export default Button;